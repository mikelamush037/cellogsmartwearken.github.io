#!/bin/bash

echo "🚀 CELLOGSMARTWEAR KENYA - Deployment Script"
echo "==========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check prerequisites
echo -e "${YELLOW}1. Checking prerequisites...${NC}"

if ! command -v git &> /dev/null; then
    echo -e "${RED}✗ Git is not installed${NC}"
    exit 1
else
    echo -e "${GREEN}✓ Git installed${NC}"
fi

if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠ Node.js not installed (optional)${NC}"
else
    echo -e "${GREEN}✓ Node.js installed${NC}"
fi

# Create directory structure
echo -e "\n${YELLOW}2. Creating directory structure...${NC}"
mkdir -p {css,js,images/{products/{mens,womens,kids,school,shoes,bags},banners,icons}}
mkdir -p api

echo -e "${GREEN}✓ Directory structure created${NC}"

# Create all necessary files
echo -e "\n${YELLOW}3. Creating files...${NC}"

# Create HTML files
touch index.html products.html product-details.html cart.html checkout.html upload.html auth.html admin.html contact.html faq.html 404.html

# Create CSS files
touch css/style.css css/responsive.css css/animations.css

# Create JS files
touch js/app.js js/cart.js js/products.js js/auth.js js/checkout.js js/admin.js js/mpesa-simulator.js js/db.js

# Create configuration files
echo "cellogsmartwearkenya.com" > CNAME
echo "www.cellogsmartwearkenya.com" >> CNAME

cat > _config.yml << 'EOF'
title: CELLOGSMARTWEAR KENYA
description: Kenya's #1 Online Fashion & School Store
baseurl: ""
url: "https://cellogsmartwearkenya.com"
theme: null
plugins: []
EOF

touch .nojekyll

# Create package.json
cat > package.json << 'EOF'
{
  "name": "cellogsmartwearkenya",
  "version": "1.0.0",
  "description": "Kenya's #1 Online Fashion & School Store",
  "main": "index.html",
  "scripts": {
    "dev": "live-server --port=3000",
    "deploy": "gh-pages -d ."
  },
  "keywords": ["ecommerce", "kenya", "fashion", "school", "shopping"],
  "author": "CELLOGSMARTWEAR KENYA",
  "license": "MIT",
  "devDependencies": {
    "gh-pages": "^5.0.0",
    "live-server": "^1.2.2"
  }
}
EOF

echo -e "${GREEN}✓ Files created${NC}"

# Initialize git repository
echo -e "\n${YELLOW}4. Initializing git repository...${NC}"

if [ ! -d ".git" ]; then
    git init
    git add .
    git commit -m "Initial commit: CELLOGSMARTWEAR KENYA website"
    echo -e "${GREEN}✓ Git repository initialized${NC}"
else
    echo -e "${YELLOW}⚠ Git repository already exists${NC}"
fi

# Install dependencies
echo -e "\n${YELLOW}5. Installing dependencies...${NC}"

if command -v npm &> /dev/null; then
    npm install
    echo -e "${GREEN}✓ Dependencies installed${NC}"
else
    echo -e "${YELLOW}⚠ Skipping npm install (npm not available)${NC}"
fi

echo -e "\n${GREEN}✅ Deployment setup complete!${NC}"
echo -e "\n${YELLOW}Next steps:${NC}"
echo "1. Update the CNAME file with your domain"
echo "2. Add your product images to /images/products/"
echo "3. Customize content in HTML files"
echo "4. Run: npm run dev (to test locally)"
echo "5. Run: npm run deploy (to deploy to GitHub Pages)"
echo -e "\n${GREEN}Happy selling! 🚀${NC}"