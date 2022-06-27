import React, { useEffect, useState } from "react";

import { CheeatahListText } from "../Compoennts/style/Text";
import { Container } from "../Compoennts/style/Container";
import { FlatList } from "react-native";
import { ListSeparator } from "../Compoennts/style/Separator";
import { superheroStore } from "../Store/SuperHeroes";
import { observer } from "mobx-react";

const ListScreen = () => {
  //   const [superheroList, setHeroList] = useState([]);

  //   useEffect(() => {
  //     setHeroList(route.params.list);
  //   }, []);

  //   const deleteHero = (id) => {
  //     let filteredHeroes = superheroList.filter((hero) => hero.id !== id);
  //     setHeroList(filteredHeroes);
  //   };

  return (
    <Container>
     
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
     
    </Container>
  );
};

export default ListScreen;
