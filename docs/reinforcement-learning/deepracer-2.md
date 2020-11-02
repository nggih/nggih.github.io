# Session 2 - Markov Decision Process 

Markov decision process (MDP) is a mathematical formalization of a Markov framework, that is widely applies in reinforcement learning problem. The framework consists of agents, environment, actions, states, rewards, as we already introduce it a little bit in Session 1. In the beginning, there is an _agent_, everything outside the agent is an _environment_. The agent take an _action_, which will give the agent a _reward_ toward a _state_ from the environment. Then the agent will be in a new state. The sequence goes like this:

$S_0, A_0, R_1, S_1, A_1, R_2, S_2, A_2,...$

![MDP](~@assets/images/mdp-1.png)
*Figure from Sutton and Barto, 2018*

To understand why the Markov Decision Process looks like this, let's dive on Markov property and Markov chain first.

### Markov Property and Markov Chain
Markov property is a property in that the possible value in the $t$, depends only on the previous state and action, $t-1$, not all earlier ones. This is the definition in the Reinforcement Learning book by Sutton and Barto, 2018. But it can also be stated as the current/present state (in $t$) influence the future state (in $t+1$), but the past state ($t-1$) will not influence the future as it has influenced only the present state.

Markov chain is a sequences of states that follows Markov property with transition probabilities. This transition probabilities gives us how likely it will go from one state to the next state. Let's check the example below.

![Markov Chain](~@assets/images/markov-chain.png)
*Figure from Suman's slides on Markov Decision Process*

How to read this Markov chain graph? Let's take a look at the Cloudy state first, it has two transition probability which leads to the Rainy and the Windy state, with 0.7 and 0.3 probability, respectively. Notice that 0.7 + 0.3 is 1. Then we observe the other state, Rainy, which has transition probability 0.2 if it becomes the Cloudy state and 0.8 when it becomes the Rainy state again. Meanwhile, the Windy state has 1.0 transition probability to become a Rainy state. 

### Markov Reward Process (MRP)

Markov reward process is just Markov chain with reward function. For example, the previous Cloudy state has 0.7 to be Rainy state in Markov chain. In this transition probability, we add the reward ($r$), let's say $r=1$. It doesn't make any sense to reward weather states, but it can be applied to other cases like the 

### Markov Decision Process 

### Discount Factor

### Return 

### Policy, Value Function

### Evaluating Value Function


## What is the role of MDP in Reinforcement Learning? 

## AWS DeepRacer Garage and Action Spaces

## Tweaking Reward Function in AWS DeepRacer


test <sup>[1]</sup>
Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.
$$\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right) 
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}$$

Supposing that $y >= 0$ and that $[\log x]$ represents the integer part of $\log x$, let:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

Obviously, when $0 <= y <= 1$, there is $\Phi(y) = 0$. For all $y >= 0$, $\Phi(y)$ is a non-decreasing function.

When $\log x>=10^4$ and $y>= e^{2{(\log x)}^{-0.1}}$, thus:

$$1 - x^{- 0.1} <= \Phi (y) <= 1$$
## References 
1. 