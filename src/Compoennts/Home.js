import React, { useState } from "react";

import { CheeatahListText, Title } from "../Compoennts/style/Text";
import { Container, RowContainer } from "../Compoennts/style/Container";
import { CheetahInput } from "../Compoennts/style/Input";
import { CheeatahButton } from "../Compoennts/style/Button";
import { superheroStore } from "../Store/SuperHeroes";
import { FlatList } from "react-native";
import { ListSeparator } from "./style/Separator";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

const Home = observer(({ navigation }) => {
  // const [superheroList, setHeroList] = useState([]);
  const [name, setName] = useState("");
  const [power, setPower] = useState("");

  const addHero = () => {
    setHeroList((list) => [...list, { name, power, id: Math.random() }]);
  };

  return (
    <Container>
      <Title>Superheroes</Title>
      <CheetahInput hint="Name" onChangeText={(text) => setName(text)} />
      <CheetahInput hint="Power" onChangeText={(text) => setPower(text)} />
      <RowContainer>
        <CheeatahButton
          title="Add"
          onPress={(text) => superheroStore.addHero({ name, power })}
          marginRight={12}
        />
        <CheeatahButton
          title="View List"
          onPress={() => navigation.navigate("List")}
        />
      </RowContainer>
      <observer>
        <FlatList
          data={superheroStore.superheroes}
          keyExtractor={(item) => item.id}
          style={{ width: "100%", marginTop: 20, paddingBottom: 10 }}
          ItemSeparatorComponent={() => <ListSeparator />}
          renderItem={({ item }) => (
            <CheeatahListText
              content={`Name: ${item.name}`}
              onLongPress={() => superheroStore.deleteHero(item.id)}
              description={`Power: ${item.power}`}
            />
          )}
        />
      </observer>
    </Container>
  );
});

export default Home;
