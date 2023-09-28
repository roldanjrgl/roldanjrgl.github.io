---
title: "Tensorflow notes"
last_modified_at: 2023-08-25T21:17:02-05:00
categories:
  - Notes
tags:
  - tensorflow
toc: true
---
# Tensorflow 
- [Tensorflow](https://www.tensorflow.org/)
- [Tensorflow - keras](https://www.tensorflow.org/api_docs/python/tf/keras/)
- [Tensorflow - repository](https://github.com/tensorflow)

# Keras
- [Keras](https://keras.io/)
- [Keras - repository](https://github.com/keras-team/keras)

# Models
## tf.keras.Model
- [tf.keras.Model](https://www.tensorflow.org/api_docs/python/tf/keras/Model)


### Methods
- [model.summary()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#summary)
- [model.compile()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#compile)
- [model.fit()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#fit)
- [model.predict()](https://www.tensorflow.org/api_docs/python/tf/keras/Model#predict)
## Sequential
-   

## Dense

# Losses
[Module: tf.keras.losses](https://www.tensorflow.org/api_docs/python/tf/keras/losses)

## BinaryCrossentropy
- [tf.keras.losses.BinaryCrossentropy](https://www.tensorflow.org/api_docs/python/tf/keras/losses/BinaryCrossentropy)


## MeanSquaredError
[tf.keras.losses.MeanSquaredError](https://www.tensorflow.org/api_docs/python/tf/keras/losses/MeanSquaredError)

## SparseCategoricalCrossentropy
[tf.keras.losses.SparseCategoricalCrossentropy](https://www.tensorflow.org/api_docs/python/tf/keras/losses/SparseCategoricalCrossentropy)


# Input
- [tf.keras.Input](https://www.tensorflow.org/api_docs/python/tf/keras/Input)


# Optimizers
##  Adam
[tf.keras.optimizers.Adam](https://www.tensorflow.org/api_docs/python/tf/keras/optimizers/Adam)

# Layers


## Normalization
```
norm_l = tf.keras.layers.Normalization(
norm_l.adapt(X)  # learns mean, variance
Xn = norm_l(X)
```

bob
# Common imports
`` 
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.models import Dense
```
