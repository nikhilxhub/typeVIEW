export interface Question {
  id: string;
  category: string;
  text: string;
}

export const questions: Question[] = [
  {
    id: "kafka-1",
    category: "kafka",
    text: "One morning, as Gregor Samsa was waking up from anxious dreams, he discovered that in bed he had been changed into a monstrous verminous bug. He lay on his armour-hard back and saw, as he lifted his head up a little, his brown, arched abdomen divided up into rigid bow-like sections. From this height the blanket, just about ready to slide off completely, could hardly stay in place. His numerous legs, pitifully thin in comparison to the rest of his circumference, flickered helplessly before his eyes."
  },
  {
    id: "kafka-2",
    category: "kafka",
    text: "'What's happened to me,' he thought. It was no dream. His room, a proper room for a human being, only somewhat too small, lay quietly between the four well-known walls. Above the table, on which an unpacked collection of sample cloth goods was spread out (Samsa was a traveling salesman) hung the picture which he had cut out of an illustrated magazine a little while ago and set in a pretty gilt frame. It was a picture of a woman with a fur hat and a fur boa. She sat erect there, lifting up in the direction of the viewer a solid fur muff into which her entire forearm disappeared."
  },
  {
    id: "kafka-3",
    category: "kafka",
    text: "Gregor's glance then turned to the window. The dreary weather (the rain drops were falling audibly down on the metal window ledge) made him quite melancholy. 'Why don't I keep sleeping for a little while longer and forget all this foolishness,' he thought. But this was entirely impractical, for he was used to sleeping on his right side, and in his present state he couldn't get himself into this position. No matter how hard he threw himself onto his right side, he always rolled again onto his back. He must have tried it a hundred times, closing his eyes, so that he would not have to see the wriggling legs, and gave up only when he began to feel a light, dull pain in his side which he had never felt before."
  },
  {
    id: "kafka-4",
    category: "kafka",
    text: "'O God,' he thought, 'what a demanding job I've chosen! Day in, day out on the road. The stresses of trade are much greater than the work going on at head office, and, in addition to that, I have to deal with the problems of traveling, the worries about train connections, irregular bad food, temporary and constantly changing human relationships which never come from the heart. To hell with it all!' He felt a slight itching on the top of his abdomen. He slowly pushed himself on his back closer to the bed post so that he could lift his head more easily, found the itchy part, which was entirely covered with small white spots (he did not know what to make of them), and wanted to feel the place with a leg. But he retracted it immediately, for the contact felt like a cold shower all over him."
  },
  {
    id:"kafka-5",
    category:"kafka",
    text:"Franz Kafka, the author of 'The Metamorphosis', 'The Trial', 'Letters to Milena', and more, is one of the most iconic authors to write about alienation, absurdity, and musings. Here we mention 10 quotes from his works that make people think deeply about life.'In a way, you've already chosen what you've become.' - A quote that pushes people to think again about personal responsibility, be it past decisions or future ones, this line puts people into deep thought about decisions made before.'A first sign of the beginning of understanding is the wish to die.'- A quote that mentions death, this one makes people overthink about the true meaning of life and understanding it in a raw form.'Suffering is the positive element in this world, indeed it is the only link between this world and the positive.' - This quote makes people reconsider suffering, not as a curse, but as a bridge to growth."
  },
  {
    id:"Dostoevsky-1",
    category:"Dostoevsky",
    text:"Crime and Punishment, novel by Russian writer Fyodor Dostoyevsky, first published in 1866. His first masterpiece, the novel is a psychological analysis of the poor former student Raskolnikov, whose theory that he is an extraordinary person able to take on the spiritual responsibility of using evil means to achieve humanitarian ends leads him to murder. The act produces nightmarish guilt in Raskolnikov. The story is one of the finest studies of the psychopathology of guilt written in any language."
  },
  {
    id:"Dostoevsky-2",
    category:"Dostoevsky",
    text:"Raskolnikov, a former student, lives in poverty and chaos in St. Petersburg. He decides—through contradictory theories, including utilitarian morality and the belief that extraordinary people have the 'right to transgress'—to murder Alyona Ivanovna, an elderly pawnbroker. Alyona's half sister, Lizaveta, arrives while he is rifling through Alyona's possessions, and he kills her too. In the meantime he befriends an alcoholic man, Marmeladov, whose daughter Sonya has been forced into prostitution to support the family. An old friend, Razumikhin, also enters his life, concerned by his aberrant behaviour. In addition, Raskolnikov’s sister, Dunya, who has left her job as a governess for Svidrigailov because of his improper advances toward her, arrives in St. Petersburg with their mother. Dunya intends to marry a man named Luzhin in order to improve their financial and social position."
  },
  {
    id:"Dostoevsky-3",
    category:"Dostoevsky",
    text:"The narrative follows the twists and turns of Raskolnikov's emotions and elaborates his struggle with his conscience and the tightening noose of suspicion. He is ill through most of the story, and he angrily rejects his family's and Razumikhin's attempts to help him."
  },
  {
    id:"Dostoevsky-3",
    category:"Dostoevsky",
    text:" When Marmeladov is run over by a carriage and dies, Raskolnikov gives Sonya and the family money for his funeral. He forbids Dunya to marry the pompous Luzhin, who offends Dunya to the point that she breaks off the engagement. Raskolnikov repeatedly visits Sonya, but he behaves in such an unhinged manner that she is frightened. When it seems that Porfiry, who is investigating the murder, is on the point of charging Raskolnikov, another man confesses. At a memorial dinner for Marmeladov, Luzhin falsely accuses Sonya of stealing from him, and Raskolnikov explains why he would do such a thing."
  },
  {
    id:"Dostoevsky-5",
    category:"Dostoevsky",
    text:"Later he tells Sonya that he murdered the two women. Svidrigailov overhears the confession and subsequently uses that knowledge to try to blackmail Dunya into accepting him, but, when it becomes clear that she will never love him, he kills himself."
  },

  {
    id:"kafka-6",
    category:"kafka",
    text:"hello"
  },
  // {
  //   id:"kafka-2",
  //   category:"kafka",
  //   text:"world welcome"
  // },


];




export const getQuestionsByCategory = (category: string): Question[] => {
  return questions.filter(q => q.category === category);
};

export const getRandomQuestion = (category: string): Question => {
  const categoryQuestions = getQuestionsByCategory(category);
  const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
  return categoryQuestions[randomIndex];
};