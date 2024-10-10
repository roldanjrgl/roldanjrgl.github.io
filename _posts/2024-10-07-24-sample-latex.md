---
title: "Latex sample"
last_modified_at: 2023-08-25T21:17:02-05:00
categories:
  - Blog
tags:
  - embeddings 
  - vectors
toc: true
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

# Start post

The Newtonian gravitational potential is defined as

\begin{equation} \label{test1}
\phi = - \frac{G M}{r} .
\end{equation}

\begin{equation} \label{test2}
\phi = - \frac{G M}{r} .
\end{equation}

Refering to equation \ref{test1} and \ref{test2}.

We can find the gravitational field by taking the gradient of the potential

$$ \vec{g} = -\vec{\nabla}\phi. $$

The line element for Minkowski space is \\(\mathrm{d}s^2 = -dt^2 + dx^2 + dy^2 + dz^2\\)

Einstein's equations are

\\[ G\_{\mu\nu} = 8\pi\, T\_{\mu\nu} \\]

in geometric units where \\(G=c=1\\).

We can write Maxwell's equations in tensor form using the `align` environment
\begin{align\*}
\mathrm{d}\mathcal{F} & = 0, \\\\\\
^\*\mathrm{d} ^\*\mathcal{F} & = \mathcal{J}.
\end{align\*}



$$
\begin{equation}
    f(x) = 
        \begin{aligned}[t]
            &x^2 + 2x + 1 \\
            & = (x+1)^2 \\
            & = x^2 + 2x + 1
        \end{aligned}
\end{equation}
$$

$$
\begin{align}
    f(x) &= x^2 + 2x + 1 \\
         &= (x+1)^2 \\
         &= x^2 + 2x + 1
\end{align}
$$
