import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import { categoriesData } from "./mockData/categories.data";
import { taskData } from "./mockData/task.data";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#F7F0E8"}}>
      <View  style={{ gap: 20, padding: 15 }}>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
          <View>
            <Text style={{fontSize: 30, fontWeight: "bold"}}>Hello, Devs</Text>
            <Text>14 tasks devs</Text>
          </View>

          <TouchableOpacity style={{backgroundColor: "white" , borderRadius: 40, padding: 5}}>
            <Image source={require("./assets/person.png")} />
          </TouchableOpacity>
        </View>

        {/**Search Bar */}
        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          {/**TextInput Box  */}
          <TextInput
            placeholder="Search"
            style={{
              backgroundColor: "white",
              width: "80%",
              height: 50,
              borderRadius: 10,
              padding: 5,
            }}
          />
          {/**FIlter Icon */}
          <View style={{backgroundColor: "#F0522F", padding: 10, borderRadius: 10}}>
            <Image source={require("./assets/Vector.png")} />
          </View>
        </View>

        {/**Categories */}
        <View style={{ gap: 10 }}>
          <Text style={{fontSize: 30, fontWeight: "bold"}}>Categories</Text>

          <FlatList
            data={categoriesData}
            renderItem={({ item }) => (
              <View
                style={{ gap: 10, backgroundColor: "white", marginRight: 5, marginLeft: 5, borderRadius: 20, padding: 25 }}
              >
                <View>
                  <Text style={{fontWeight: "bold", fontSize: 25}}>
                    {item.name}
                  </Text>
                  <Text>{item.description}</Text>
                </View>
                <Image source={item.image} />
              </View>
            )}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/**Ongoing Tasks */}
        <View style={{ gap: 20 }}>
          <Text style={{fontWeight: "bold", fontSize: 25}}>Ongoing Task</Text>

          <FlatList
            data={taskData}
            renderItem={({ item }) => (
              <View
                style={{ gap: 10, height: 150, backgroundColor: "white", borderColor: "#E8D1BA", marginRight: 10, padding: 20, borderRadius: 20, width:"100%", marginBottom: 5, justifyContent: "center"  }}
              >
                <View>
                  <Text style={{fontWeight: "600", fontSize: 20}} >
                    {item.name}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
