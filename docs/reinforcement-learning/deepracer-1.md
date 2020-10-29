# Session 1 - Introduction 


## What is Reinforcement Learning? 

Reinforcement learning is a part of machine learning, which enables the model/machine to learn about its surroundings through its actions based on maximum reward mechanism. Reinforcement concept itself came from psychology, which is about conditioning based on rewards and punishments to get the desired results. This is quite different than the other machine learning domains, the supervised learning and unsupervised learning. 

Supervised learning uses labels as the guidances for the model to learn. Meanwhile, the unsupervised learning learns from the intrinsic features from the data without the human-annotated labels. The most distinguished differences from reinforcement learning are the reinforcement mechanism itself and the exploration-exploitation process, which do not exist in supervised or unsupervised learning.

## The Elements of Reinforcement Learning

![Elements](~@assets/images/rl_elements.png)

*Figure from Donnie Prakoso Session 1 slide*

All the reinforcement learning has these basic elements:
- Agent: 
    The virtual car (neural network model) in simulation or the physical device (OpenVino AWS DeepRacer car).
- Environment:
    The race track (coordinates in simulation) or the physical track.
- State:
    Agent's snapshot at the point of time from the environment. There are current state, previous state and future state. In here, it is the image that the camera takes.
- Action:
    The decision which the agent will choose. For example, the speed and the steering angle. 
- Reward:
    The incentives for particular behaviors. This can be a positive reward or negative reward (punishment). We define the reward function for the agent.

As the main goal in reinforcement learning is to get the maximum rewards, there is a trade-off in reinforcement learning which is between the exploration and the exploitation. When the agent explores too much, it won't maximizes the reward as all actions might not give the maximum result. And when the agent exploits too much, it might not maximizes the right action. The agent should balances between exploration and exploitation.

![Learning](~@assets/images/rl_elements_learning.png)

*Figure from Donnie Prakoso Session 1 slide*

In a bigger picture, the learning in reinforcement learning goes like this. The agent will choose an action based on the environment state, which returns the reward and then goes to next state.  

### Scores
By using the reward function, we can give a score to each behavior. For example, we want to give a higher reward if the agent maintains a high speed and penalize with lower reward if the agent goes slow. 

### Episode
If the agent reaches a stop state, where it reaches its destination or off-track, the rewards will be totaled/ summed. It is called an episode. 

### Iteration
Learning in machine learning takes some iterations for the model to converge to its optimum points. This is the same in reinforcement learning where it takes some iterations to optimize those rewards that have been accumulated. In every n-th of the iteration, the model matrix will be updated accordingly.

## Reward function

It is important to tweak the reward function so the agent will maximize the behavior we want to enforce. There are several parameters that we can adjust.

![Params](~@assets/images/rl_rewardfunction-params.png)

*[Figure from AWS DeepRacer tutorial](https://d2k9g1efyej86q.cloudfront.net/)*

More detailed explanation is available on the AWS DeepRacer documeentation. I will put a separate blog post regarding the params and my findings after this bootcamp is over.

## AWS DeepRacer League in 2020!
![League](~@assets/images/rl_aws-deepracer-league.png)
*Figure from Donnie Prakoso Session 1 slide*

I am participating in the online virtual circuit in the time trial race formats. I really enjoy training the DeepRacer agent, it is really fun to watch, you can see the simulation video stream of your agent struggling to maximize the rewards. 

![Snaps](~@assets/images/snapshot.jpg)

