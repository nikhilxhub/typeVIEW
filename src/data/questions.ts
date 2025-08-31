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
  }
];




export const getQuestionsByCategory = (category: string): Question[] => {
  return questions.filter(q => q.category === category);
};

export const getRandomQuestion = (category: string): Question => {
  const categoryQuestions = getQuestionsByCategory(category);
  const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
  return categoryQuestions[randomIndex];
};