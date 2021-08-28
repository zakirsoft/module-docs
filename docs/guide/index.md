---
lang: en-US
title: Installation Guide
description: Project setup and Installation Guide. 
sidebar: auto
# NavLink
next:
  text: Laravel Modules
  link: /module
---

# Installation Guide
[[toc]]

### Clone the Repo
```bash
  # Clone the repository
  git clone https://github.com/zakirsoft/laravel-module.git laravel-module
```

### Setup Project
```bash
  # Go to backend folder and install composer dependencies
  cd laravel-module && composer install

  # copy env file
  cp .env.example .env

  # generate key
  php artisan key:generate

  # setup database credentails and migrate the DB
  php artisan migrate:fresh --seed

  # serve the application
  php artisan serve
```


