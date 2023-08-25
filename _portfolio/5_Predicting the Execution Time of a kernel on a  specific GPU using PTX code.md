---
title: "Predicting the Execution Time of a kernel on a  specific GPU using PTX code"
#excerpt: "This is a summary of project 5"
header:
#  image: /assets/images/foo-bar-identity.jpg
  teaser: /assets/images/pred_exec_ptx_code_1.png
sidebar:
  - title: "Role"
    image: /assets/images/pred_exec_ptx_code_1.png
    image_alt: "logo"
    text: "Designer, Front-End Developer"
  - title: "Responsibilities"
    text: "Reuters try PR stupid commenters should isn't a business model"
#gallery:
#  - url: /assets/images/unsplash-gallery-image-1.jpg
#    image_path: assets/images/unsplash-gallery-image-1-th.jpg
#    alt: "placeholder image 1"
#  - url: /assets/images/unsplash-gallery-image-2.jpg
#    image_path: assets/images/unsplash-gallery-image-2-th.jpg
#    alt: "placeholder image 2"
#  - url: /assets/images/unsplash-gallery-image-3.jpg
#    image_path: assets/images/unsplash-gallery-image-3-th.jpg
#    alt: "placeholder image 3"
---

[Check paper](http://roldanjrgl.github.io/files/predicting_the_execution_time_of_a_kernel_on_a_specific_gpu_using_ptx_code)


During the last couple of decades, there has been an exponential growth in the amount of time and energy required to run workloads on high-performance computing systems, which nowadays rely heavily upon GPUs. In order to reduce the resources required by these systems, one clear approach is to avoid inefficient applications by using prediction models that could inform developers of the approximate execution time. In this work, we have trained models based on ensemble learning techniques such as Random Forest and Gradient Boosted Decision trees, as well as the deep learning architecture TabNet to predict the execution time of a specific kernel on a specific GPU architecture. We used data obtained using the CUDA-Flux profiler from the PTX code as input features. The best performing model in terms of the number of predictions with an error in the range of (0-10%) is CatBoost with 91.6%, Random Forests with 85.4%, and TabNet with 76.6%.
