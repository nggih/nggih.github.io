---
title: "Prompt Injection Is an Authorization Problem"
description: "Why instruction hierarchy alone cannot secure systems that let language models act on privileged resources."
date: 2026-07-12
category: "AI Red Teaming"
tags: [prompt-injection, authorization, agents]
featured: true
---

Prompt injection is often framed as a problem of getting the model to follow the “right” instructions. The deeper failure occurs when a probabilistic interpreter is trusted to authorize consequential actions.

## The safer invariant

The model may propose an action. A deterministic policy layer decides whether it is permitted. High-impact actions should also require explicit human confirmation.

Treat retrieved content and tool results as untrusted data. Bind credentials to the user and task, separate read from execute capabilities, and log proposed as well as executed actions.
