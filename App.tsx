import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  LLAMA3_2_3B_QLORA,
  LLAMA3_2_3B_TOKENIZER,
  useLLM,
} from 'react-native-executorch';

const App = () => {
  const llama = useLLM({
    modelSource: LLAMA3_2_3B_QLORA,
    tokenizerSource: LLAMA3_2_3B_TOKENIZER,
  });

  const [prompt, setPrompt] = React.useState('What is the capital of France?');
  const [response, setResponses] = React.useState('');

  const handleGenerate = async () => {
    const responses = await llama.generate(prompt);
    setResponses(responses);
    return responses;
  };

  return (
    <View style={styles.container}>
      <Text>LLM Response:</Text>
      <Text>{response}</Text>
      <Text>Prompt:</Text>
      <Text>{prompt}</Text>
      <Text onPress={handleGenerate} style={{color: 'blue'}}>
        Generate
      </Text>
      <Text onPress={() => setPrompt('')} style={{color: 'red'}}>
        Clear Prompt
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
