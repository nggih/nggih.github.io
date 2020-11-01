(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{355:function(e,t,a){e.exports=a.p+"assets/img/rl_elements.e8b7701d.png"},356:function(e,t,a){e.exports=a.p+"assets/img/rl_elements_learning.768b6499.png"},357:function(e,t,a){e.exports=a.p+"assets/img/rl_rewardfunction-params.5c836896.png"},358:function(e,t,a){e.exports=a.p+"assets/img/rl_aws-deepracer-league.0c825b6a.png"},359:function(e,t,a){e.exports=a.p+"assets/img/snapshot.7058ba9d.jpg"},375:function(e,t,a){"use strict";a.r(t);var n=a(42),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"session-1-introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#session-1-introduction"}},[e._v("#")]),e._v(" Session 1 - Introduction")]),e._v(" "),n("h2",{attrs:{id:"what-is-reinforcement-learning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-reinforcement-learning"}},[e._v("#")]),e._v(" What is Reinforcement Learning?")]),e._v(" "),n("p",[e._v("Reinforcement learning is a part of machine learning, which enables the model/machine to learn about its surroundings through its actions based on maximum reward mechanism. Reinforcement concept itself came from psychology, which is about conditioning based on rewards and punishments to get the desired results. This is quite different than the other machine learning domains, the supervised learning and unsupervised learning.")]),e._v(" "),n("p",[e._v("Supervised learning uses labels as the guidances for the model to learn. Meanwhile, the unsupervised learning learns from the intrinsic features from the data without the human-annotated labels. The most distinguished differences from reinforcement learning are the reinforcement mechanism itself and the exploration-exploitation process, which do not exist in supervised or unsupervised learning.")]),e._v(" "),n("h2",{attrs:{id:"the-elements-of-reinforcement-learning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-elements-of-reinforcement-learning"}},[e._v("#")]),e._v(" The Elements of Reinforcement Learning")]),e._v(" "),n("p",[n("img",{attrs:{src:a(355),alt:"Elements"}})]),e._v(" "),n("p",[n("em",[e._v("Figure from Donnie Prakoso Session 1 slide")])]),e._v(" "),n("p",[e._v("All the reinforcement learning has these basic elements:")]),e._v(" "),n("ul",[n("li",[e._v("Agent:\nThe virtual car (neural network model) in simulation or the physical device (OpenVino AWS DeepRacer car).")]),e._v(" "),n("li",[e._v("Environment:\nThe race track (coordinates in simulation) or the physical track.")]),e._v(" "),n("li",[e._v("State:\nAgent's snapshot at the point of time from the environment. There are current state, previous state and future state. In here, it is the image that the camera takes.")]),e._v(" "),n("li",[e._v("Action:\nThe decision which the agent will choose. For example, the speed and the steering angle.")]),e._v(" "),n("li",[e._v("Reward:\nThe incentives for particular behaviors. This can be a positive reward or negative reward (punishment). We define the reward function for the agent.")])]),e._v(" "),n("p",[e._v("As the main goal in reinforcement learning is to get the maximum rewards, there is a trade-off in reinforcement learning which is between the exploration and the exploitation. When the agent explores too much, it won't maximizes the reward as all actions might not give the maximum result. And when the agent exploits too much, it might not maximizes the right action. The agent should balances between exploration and exploitation.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(356),alt:"Learning"}})]),e._v(" "),n("p",[n("em",[e._v("Figure from Donnie Prakoso Session 1 slide")])]),e._v(" "),n("p",[e._v("In a bigger picture, the learning in reinforcement learning goes like this. The agent will choose an action upon the environment state, which returns the reward and then goes to next state. We will discuss this particular process in the Session 2 using Markov Decision Process.")]),e._v(" "),n("h3",{attrs:{id:"scores"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#scores"}},[e._v("#")]),e._v(" Scores")]),e._v(" "),n("p",[e._v("By using the reward function, we can give a score to each behavior. For example, we want to give a higher reward if the agent maintains a high speed and penalize with lower reward if the agent goes slow.")]),e._v(" "),n("h3",{attrs:{id:"episode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#episode"}},[e._v("#")]),e._v(" Episode")]),e._v(" "),n("p",[e._v("If the agent reaches a stop state, where it reaches its destination or off-track, the rewards will be totaled/ summed. It is called an episode.")]),e._v(" "),n("h3",{attrs:{id:"iteration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iteration"}},[e._v("#")]),e._v(" Iteration")]),e._v(" "),n("p",[e._v("Learning in machine learning takes some iterations for the model to converge to its optimum points. This is the same in reinforcement learning where it takes some iterations to optimize those rewards that have been accumulated. In every n-th of the iteration, the model matrix will be updated accordingly.")]),e._v(" "),n("h2",{attrs:{id:"reward-function"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reward-function"}},[e._v("#")]),e._v(" Reward function")]),e._v(" "),n("p",[e._v("It is important to tweak the reward function so the agent will maximize the behavior we want to enforce. There are several parameters that we can adjust.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(357),alt:"Params"}})]),e._v(" "),n("p",[n("em",[n("a",{attrs:{href:"https://d2k9g1efyej86q.cloudfront.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Figure from AWS DeepRacer tutorial"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("More detailed explanation is available on the AWS DeepRacer documeentation. I will put a separate blog post regarding the params and my findings after this bootcamp is over.")]),e._v(" "),n("h2",{attrs:{id:"aws-deepracer-league-in-2020"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#aws-deepracer-league-in-2020"}},[e._v("#")]),e._v(" AWS DeepRacer League in 2020!")]),e._v(" "),n("p",[n("img",{attrs:{src:a(358),alt:"League"}}),e._v(" "),n("em",[e._v("Figure from Donnie Prakoso Session 1 slide")])]),e._v(" "),n("p",[e._v("I am participating in the online virtual circuit in the time trial race formats. I really enjoy training the DeepRacer agent, it is really fun to watch, you can see the simulation video stream of your agent struggling to maximize the rewards.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(359),alt:"Snaps"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);