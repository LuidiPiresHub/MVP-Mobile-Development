import { StatusBar } from 'expo-status-bar';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import logo from './assets/images/logo.png';
import bgImage from './assets/images/banner.jpg';

function Card({ title, location, time, image }: any) {
  return (
    <View className="w-[250px] mb-4">

      <View className="w-full h-[140px] rounded-xl overflow-hidden">
        <Image
          source={image}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>

      <Text className="mt-2 font-bold text-sm text-center">
        {title}
      </Text>

      <View className="flex-row justify-center mt-1">
        <Text className="mr-2">📍 {location}</Text>
        <Text>🕒 {time}</Text>
      </View>

      <TouchableOpacity className="mt-1">
        <Text className="text-center text-blue-500">
          Saiba Mais
        </Text>
      </TouchableOpacity>

    </View>
  );
}

export default function App() {
  const data = [
    {
      title: 'Parque Barão de Mauá',
      location: 'Magé',
      time: '09h às 16h',
      image: require('./assets/images/parque-barao.webp'),
    },
    {
      title: 'Serra dos Órgãos',
      location: 'Teresópolis',
      time: '08h às 16h',
      image: require('./assets/images/serra-dos-orgaos.png'),
    },
    {
      title: 'Trilhas',
      location: 'Magé',
      time: '08h às 16h',
      image: require('./assets/images/trilhas.jpeg'),
    },
    {
      title: 'Cachoeira de Andorinhas',
      location: 'Andorinhas',
      time: 'Sempre Aberto',
      image: require('./assets/images/cachoeira-andorinhas.jpeg'),
    },
    {
      title: 'Cachoeira Véu da Noiva',
      location: 'Magé',
      time: 'Sempre Aberto',
      image: require('./assets/images/veu-da-noiva.jpeg'),
    },
    {
      title: 'Cachoeira dos Monjolos',
      location: 'Santo Aleixo',
      time: 'Sempre Aberto',
      image: require('./assets/images/cachoeira-monjolos.jpeg'),
    },
  ];

  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

        {/* HEADER */}
        <View className="bg-green-900 flex-row justify-between px-2 py-2">
          <View className="w-[60px] h-[40px]">
            <Image
              source={logo}
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
            />
          </View>

          <View className="flex-row items-center">
            <TouchableOpacity className="mr-2">
              <Text className="text-white text-xs">Contato</Text>
            </TouchableOpacity>

            <TouchableOpacity className="mr-2">
              <Text className="text-white text-xs">Quem Somos</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text className="text-white text-xs">
                Portal Administrativo
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* BANNER */}
        <View className="h-40">
          <ImageBackground
            source={bgImage}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          >
            <View className="flex-1 bg-black/50 justify-center items-center px-4">
              <Text className="text-white font-bold">
                Magé Verde Online
              </Text>

              <Text className="text-white text-center text-xs mt-1">
                Portal com as informações mais atualizadas sobre o ecoturismo do município de Magé.
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/* TRILHAS E PARQUES */}
        <View className="p-4">
          <Text className="text-lg font-bold mb-3">
            Trilhas e Parques
          </Text>

          <View className="items-center">
            {data.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </View>
        </View>

        {/* EVENTOS */}
        <View className="p-4">
          <Text className="text-lg font-bold mb-3">
            Eventos
          </Text>

          <View className="w-full h-[180px] rounded-xl overflow-hidden mb-4">
            <Image
              source={require('./assets/images/evento.jpeg')}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>

          <View className="mb-5">
            <Text className="font-bold">
              Praça de Cross Training
            </Text>

            <Text className="mt-1">
              A nova Praça de Cross Training, no Centro de Piabetá, é um novo espaço pensado para estimular hábitos saudáveis...
            </Text>

            <TouchableOpacity className="mt-1">
              <Text className="text-blue-500">Saiba Mais</Text>
            </TouchableOpacity>
          </View>

          <View className="mb-5">
            <Text className="font-bold">
              Liga carioca de Downhill
            </Text>

            <Text className="mt-1">
              Nos dias 05 e 06 de julho, Magé recebe a Liga Carioca de Downhill 2025...
            </Text>

            <TouchableOpacity className="mt-1">
              <Text className="text-blue-500">Saiba Mais</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FOOTER */}
        <View className="bg-emerald-900 p-4 mt-5">

          <View className="items-center mb-4">
            <Image
              source={logo}
              style={{ width: 120, height: 40 }}
              resizeMode="contain"
            />

            <Text className="text-white mt-2 text-center">
              Explorando o ecoturismo de Magé
            </Text>
          </View>

          <View className="mb-4">
            <Text className="text-white font-bold mb-1">
              Mapa do Site
            </Text>

            <Text className="text-white">Trilhas</Text>
            <Text className="text-white">Cachoeiras</Text>
            <Text className="text-white">Eventos</Text>
          </View>

          <View className="mb-4">
            <Text className="text-white font-bold mb-1">
              Redes Sociais
            </Text>

            <Text className="text-white">Instagram</Text>
            <Text className="text-white">Facebook</Text>
            <Text className="text-white">YouTube</Text>
          </View>

          <View className="h-[1px] bg-white/20 my-3" />

          <Text className="text-white text-center text-xs">
            © 2025 Magé Verde Online. Todos os direitos reservados.
          </Text>

        </View>

      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}