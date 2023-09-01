variable "environment" {
  description = "Environment name for deployment"
  type        = string
  default     = "manve"
}

variable "aws_region" {
  description = "AWS region resources are deployed to"
  type        = string
  default     = "us-east-1"
}

# VPC Variables

variable "vpc_cidr" {
  description = "VPC cidr block"
  type        = string
  default     = "10.0.0.0/16"
}

variable "subnet_cidr" {
  description = "Subnet cidr block"
  type        = string
  default     = "10.0.0.0/24"
}

# IAM Role Variables

variable "ec2-trust-policy" {
  description = "sts assume role policy for EC2"
  type        = string
  default     = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "sts:AssumeRole"
            ],
            "Principal": {
                "Service": [
                    "ec2.amazonaws.com"
                ]
            }
        }   
    ]
}
EOF  
}

# EC2 Variables

variable "ssh_key" {
  description = "ssh key name"
  type        = string
  default     = "manve-key"
}

variable "instance_type" {
  description = "Jenkins EC2 instance type"
  type        = string
  default     = "t2.micro"
}