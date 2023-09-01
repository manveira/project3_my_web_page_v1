# VPC

resource "aws_vpc" "vpc" {
  cidr_block = var.vpc_cidr

  tags = {
    Name = "vpc-${var.environment}"
  }
}

# Subnet
resource "aws_subnet" "subnet" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.subnet_cidr
  map_public_ip_on_launch = true

  tags = {
    Name = "subnet-${var.environment}"
  }
}

# IGW
resource "aws_internet_gateway" "internet_gateway" {
  vpc_id = aws_vpc.vpc.id

  tags = {
    Name = "IGW-${var.environment}"
  }
}

# Route table attached to VPC and IGW
resource "aws_default_route_table" "default_route" {
  default_route_table_id = aws_vpc.vpc.default_route_table_id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.internet_gateway.id
  }
}

# Roles IAM
resource "aws_iam_role" "ec2_iam_role" {
  name               = "${var.environment}-ec2-iam-role"
  assume_role_policy = var.ec2-trust-policy
}

resource "aws_iam_instance_profile" "ec2_instance_profile" {
  name = "${var.environment}-ec2-instance-profile"
  role = aws_iam_role.ec2_iam_role.id
}

# Local Public IP 
data "external" "myipaddr" {
  program = ["bash", "-c", "curl -s 'https://ipinfo.io/json'"]
}

# SG Manve EC2
resource "aws_security_group" "manve_security_group" {
  name        = "${var.environment}-SG"
  description = "SG for manve EC2"
  vpc_id      = aws_vpc.vpc.id

  # SSH 
  ingress {
    description = "Allow SSH from MY Public IP"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["${data.external.myipaddr.result.ip}/32"]
  }

  # HTTP 
  ingress {
    description = "Allow HTTP from MY Public IP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["${data.external.myipaddr.result.ip}/32"]
  }

  # HTTPS 
  ingress {
    description = "Allow HTTPS from MY Public IP"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["${data.external.myipaddr.result.ip}/32"]
  }

  # 8080 Port
  ingress {
    description = "Allow access to Jenkis from My IP"
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["${data.external.myipaddr.result.ip}/32"]
  }

  # All traffic outbound
  egress {
    description = "Allow All Outbound"
    protocol    = -1
    from_port   = 0
    to_port     = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.environment}-SG"
  }
}


# AMI Image
data "aws_ami" "amazon_linux_2" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu*"]
  }

  filter {
    name   = "owner-alias"
    values = ["amazon"]
  }
  
  filter {
    name   = "architecture"
    values = ["x86_64"]
  }
}

# TLS
resource "tls_private_key" "generated" {
  algorithm = "RSA"
}

# Local file
resource "local_file" "private_key_pem" {
  content         = tls_private_key.generated.private_key_pem
  filename        = "${var.ssh_key}.pem"
  file_permission = "0400"
}

# SSH Key pairs  
resource "aws_key_pair" "generated" {
  key_name   = var.ssh_key
  public_key = tls_private_key.generated.public_key_openssh
} 

# EC2 Manve
resource "aws_instance" "manve_server" {
  ami                  = data.aws_ami.amazon_linux_2.id
  instance_type        = var.instance_type
  key_name             = aws_key_pair.generated.key_name
  subnet_id            = aws_subnet.subnet.id
  security_groups      = [aws_security_group.manve_security_group.id]
  iam_instance_profile = aws_iam_instance_profile.ec2_instance_profile.id
  connection {
    user        = "ec2-${var.environment}"
    private_key = tls_private_key.generated.private_key_pem
    host        = self.public_ip
  }

  tags = {
    Name = "${var.environment}-EC2"
  }
}