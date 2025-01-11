---
title: "The transformer"
last_modified_at: 2023-08-25T21:17:02-05:00
categories:
  - Blog
tags:
  - embeddings 
  - vectors
toc: true
classes: wide
teaser: /assets/posts/2024-10-10-24-vector-embeddings/output.png
header:
  teaser: /assets/images/my-awesome-post-teaser.jpg
---

<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      TeX: {equationNumbers: {autoNumber: "AMS"}},
    });
</script>

<script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

{{ toc }}

# Outline brainstorm
Test \ref{eq1}

$$
\begin{equation} \label{eq_vectors_kqv}
    \mathbf{q}_i = \mathbf{x}_i \mathbf{W}^Q, \ \mathbf{k}_i = \mathbf{x}_i \mathbf{W}^K, \ \mathbf{v}_i = \mathbf{x}_i \mathbf{W}^V
\end{equation}
$$

$$
\begin{equation} \label{eq_score}
    score(x_i, x_j) = \frac{\mathbf{q}_i \cdot \mathbf{k}_j}{\sqrt{d_k}} 
\end{equation}
$$

$$
\begin{equation} \label{eq_softmax}
    \alpha_{i,j} = softmax(score(x_i, x_j)) \ \forall j \leq i
\end{equation}
$$

$$
\begin{equation} \label{eq_a}
    \mathbf{a_i} = 3x
\end{equation}
$$

{% include figure image_path="assets/posts/the-transformer/self_attention.png" alt="stage3" caption="Figure 1: Self-attention"  %}