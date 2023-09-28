---
title: "Huggingface deep dive - 1: Sequence classification with BERT"
last_modified_at: 2023-08-25T21:17:02-05:00
categories:
  - Tutorial
tags:
  - huggingface
  - sequence_classification
  - bert
toc: true
---

{{ toc }}


# TL;DR

```py
import torch
from transformers import AutoTokenizer, BertForSequenceClassification

# Setup model and tokenizer
checkpoint = "nlptown/bert-base-multilingual-uncased-sentiment"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = BertForSequenceClassification.from_pretrained(checkpoint)

# stage - 1
text = "I really love this book\n"
print(f"text:\t{text}")
inputs = tokenizer(text, return_tensors="pt")

# stage - 2
with torch.no_grad():
    logits = model(**inputs).logits
    
# stage - 3
predictions = torch.nn.functional.softmax(logits, dim=-1)
for id, label in model.config.id2label.items():
    print(f"{label:<7}:\t{round(float(predictions[0][id]), 3)}")
```


# What is sequence classification?
- [sequence_classification.ipynb - notebook](https://github.com/roldanjrgl/huggingface_deep_dive/blob/main/sequence_classification.ipynb)

One common NLP (Natural Language Processing) task is to classify a text into a set of predefined categories. Let's say we have a review for a given product, and we want to predict the number of stars from 1 ⭐️ to 5 ⭐️⭐️⭐️⭐️. This is an example of a sequence classification task. Below we see two reviews, one positive review with a probability of 0.571 for 5 stars rating, and a negative review with a probability of 0.901 for 1 star rating .

{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/pipeline_positive.png" alt="Pipeline" %}

{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/pipeline_negative.png" alt="Pipeline"  %}

In this article, we will learn how to use a pretrained BERT model for sequence classification. We will go over step by step on how to use the [Huggingface Transformers](https://huggingface.co/transformers/) library to load a pretrained [BERT](https://huggingface.co/docs/transformers/model_doc/bert) model and tokenizer to predict the number of stars for a given review.

# Using a pretrained BERT model for sequence classification

# Setup model and tokenizer
The BERT model was proposed in [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding](https://arxiv.org/abs/1810.04805). 

TODO: To use this model with Huggingface wee need to understand the difference between the model architecture and the checkpoint .
- TODO: Example model architecture and class (BertForSequenceClassification)
- TODO: Example checkpoint (nlptown/bert-base-multilingual-uncased-sentiment)



```py
import torch
from transformers import AutoTokenizer, BertForSequenceClassification

# Setup model and tokenizer
checkpoint = "nlptown/bert-base-multilingual-uncased-sentiment"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = BertForSequenceClassification.from_pretrained(checkpoint
```

## Save tokenizer to your local machine

## Save model to your local machine

## Stage 1: Preprocessing
```py
# stage - 1
text = "I really love this book\n"
print(f"text:\t{text}")
inputs = tokenizer(text, return_tensors="pt"

for input, value in inputs.items():
print(f"{input:<15}: \t{value}"
```

{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/stage1.png" alt="stage1"  %}


### Stage 1: Tokenization steps

## Stage 2: Model
```py
# stage - 2
with torch.no_grad():
    logits = model(**inputs).logits

print(f"logits: \t{logits}")
```

{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/stage2.png" alt="stage2"  %}


## Stage 3: Postprocessing
```py
import torch

predictions = torch.nn.functional.softmax(logits, dim=-1)
for id, label in model.config.id2label.items():
    print(f"{label:<7}:\t{round(float(predictions[0][id]), 3)}"
```

{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/stage3.png" alt="stage3"  %}

## Complete pipeline

{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/pipeline_detailed.png" alt="this is a placeholder image"  %}
