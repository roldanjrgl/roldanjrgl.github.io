---
title: "Setting up a Conda environment"
last_modified_at: 2023-07-18T16:20:02-05:00
categories:
  - Tutorial
tags:
  - python 
  - data_science 
toc: true
---


{{ toc }}

## TLDR

```bash
conda create --name my_conda_env python=3.10
```

```bash
conda env list
```

```bash
conda activate my_conda_env
```

```bash
pip install <package_name>
```
or 

```bash
pip install -r requirements.txt 
```

## What's a conda environment?
Knowing how to set up a Conda environment is an essential skill for any data scientist or Python developer.  Conda is
an open source package management system  for Python.  

In this post, I will show you how to set up a Conda environment for your project, doing this, will help you to easily install and use 
any dependency you will need. 

For this tutorial, you will need to install [Python](https://www.python.org/downloads/) and [Anaconda](https://www.anaconda.com/download/), I recommend downloading miniconda, which is a lighter version of 
Anaconda.

## Create conda environment

Before creating a conda environment, you need to check if conda is installed in your system. To do this, open your terminal and type:

```bash
conda --version
```

You should seesomething like this:

```bash
conda 4.12.0  
````

Now, make sure you have the latest version of conda by running:

```bash
conda update conda
```

You are now ready to create your first conda environment. To do this, run:

```bash
conda create --name my_conda_env python=3.10
```

Make you created the environment by running the following command:

```bash
conda env list
```

```bash
# conda environments:
#
base                  *  /Users/Jroldan001/opt/anaconda3
my_conda_env             /Users/Jroldan001/opt/anaconda3/envs/my_conda_env
```
