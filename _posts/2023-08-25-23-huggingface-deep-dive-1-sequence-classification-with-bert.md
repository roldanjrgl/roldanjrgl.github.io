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


# TLDR
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


# Introduction
- [Notebook](https://colab.research.google.com/github/roldanjrgl/huggingface_deep_dive/blob/main/sequence_classification.ipynb)


{% include figure image_path="assets/posts/2023-08-25-23-sequence-classification-with-bert/pipeline_0.png" alt="this is a placeholder image"  %}