import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import { useTheme } from "@/contexts/ThemeContext";

const Home = () => {
  const { isDark } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  }

  const [data, setData] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [buttonPosition, setButtonPosition] = useState("");

  const handleAddTodo = () => {
    setModalVisible(!modalVisible);
    setTitle("");
    setDescription("");
  };

  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text);
  };

  const handleSaveTodo = () => {
    if (title === "" || description === "") {
      setModalVisible(false);
      setTitle("");
      setDescription("");
      setButtonPosition("mb-5");
      return;
    }

    const newTodo = {
      id: data.length + 1,
      title: title,
      description: description,
      completed: false,
    };

    setData([...data, newTodo]);
    setModalVisible(false);
    setTitle("");
    setDescription("");
    setButtonPosition("mb-5");
  };

  const handleChangeTodoState = (todoItem: any) => {
    setData(
      data.map((item) =>
        item.id === todoItem.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const changeButtonPosition = () => {
    setButtonPosition("mb-80");
  };

  return (
    <SafeAreaView className={`p-5 h-full ${isDark ? 'bg-dark-100' : 'bg-white'}`}>
      <View className="pb-3">
        <Text className={`text-xl font-rubik-bold ${isDark ? 'text-white' : 'text-black-300'}`}>Todos</Text>
      </View>

      <View className={`w-full h-0.5 ${isDark ? 'bg-dark-400' : 'bg-gray-200'} rounded-full`}></View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleChangeTodoState(item)}>
            <View className={`flex flex-col p-5 mt-5 ${isDark ? 'bg-dark-300' : 'bg-white'} rounded-lg`}>
              <Text
                className={
                  `text-base font-rubik-semibold ${isDark ? 'text-white' : 'text-black-300'} ` +
                  (item.completed ? "line-through text-black-100" : "")
                }
              >
                {item.title}
              </Text>

              <Text
                className={
                  `text-base font-rubik ${isDark ? 'text-white-200' : 'text-black-300'} ` +
                  (item.completed ? "line-through text-black-100" : "")
                }
              >
                {item.description}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View className="w-full h-full items-center justify-center p-10">
            <Text className={`${isDark ? 'text-white-200' : 'text-black-300'}`}>No todo added yet.</Text>
          </View>
        }
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        numColumns={1}
        contentContainerClassName="pb-20"
        bounces={data.length > 0 ? true : false}
      ></FlatList>

      <View className="w-full items-center h-0">
        <TouchableOpacity
          className={`absolute mb-5 bottom-10 w-20 h-20 ${isDark ? 'bg-primary-300' : 'bg-black'} items-center justify-center rounded-full p-5`}
          onPress={handleAddTodo}
        >
          <Text className="text-white text-xl font-rubik items-center justify-center ">
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide" // "fade" | "slide" | "none"
        transparent={false} // Nếu true thì nền sẽ trong suốt
        visible={modalVisible} // Điều khiển hiển thị
        onRequestClose={() => setModalVisible(false)} // Đóng modal khi nhấn Back (Android)
      >
        <SafeAreaView className={`h-full p-5 flex flex-col justify-between ${isDark ? 'bg-dark-100' : 'bg-white'}`}>
          <View className="w-full flex flex-col gap-5">
            <Text className={`text-xl font-rubik-bold ${isDark ? 'text-white' : 'text-black-300'}`}>
              Add Todo
            </Text>

            <View className={`w-full h-0.5 ${isDark ? 'bg-dark-400' : 'bg-gray-100'} rounded-full`}></View>

            <View className="w-full">
              <View className="mb-5">
                <Text className={`text-lg font-rubik-semibold ${isDark ? 'text-white' : 'text-black-300'}`}>Title</Text>
              </View>

              <View className="w-full h-20">
                <TextInput
                  onPress={changeButtonPosition}
                  onChangeText={(text) => handleTitleChange(text)}
                  className={`${isDark ? 'bg-dark-300 text-white' : 'bg-gray-200 text-black-300'} w-full p-5 rounded-lg`}
                  placeholderTextColor={isDark ? '#8C8E98' : '#666876'}
                ></TextInput>
              </View>

              <View className="mb-5">
                <Text className={`text-lg font-rubik-semibold ${isDark ? 'text-white' : 'text-black-300'}`}>Description</Text>
              </View>

              <View className="w-full h-20">
                <TextInput
                  onPress={changeButtonPosition}
                  onChangeText={(text) => handleDescriptionChange(text)}
                  className={`${isDark ? 'bg-dark-300 text-white' : 'bg-gray-200 text-black-300'} w-full p-5 rounded-lg`}
                  placeholderTextColor={isDark ? '#8C8E98' : '#666876'}
                ></TextInput>
              </View>
            </View>
          </View>

          <View className="w-full items-center">
            <TouchableOpacity
              className={
                `w-20 h-20 ${isDark ? 'bg-primary-300' : 'bg-black'} rounded-full p-5 items-center justify-center ` +
                buttonPosition
              }
              onPress={handleSaveTodo}
            >
              <Text className={"text-white"}>
                {title === "" || description === "" ? "x" : "+"}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
