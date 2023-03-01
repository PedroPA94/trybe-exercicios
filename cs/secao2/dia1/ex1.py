class TV:
    def __init__(self, tamanho) -> None:
        self.__tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
            print(f'Volume: {self.__volume}')
        else:
            print('Volume: 99 (máximo)')

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
            print(f'Volume: {self.__volume}')
        else:
            print('Volume: 0 (mínimo)')

    def modificar_canal(self, canal):
        if 1 <= canal <= 99:
            self.__canal = canal
        else:
            raise ValueError('Canal precisa estar entre 1 e 99')

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
        print(self.__ligada)


tv = TV(100)

tv.aumentar_volume()
tv.aumentar_volume()
tv.aumentar_volume()
tv.diminuir_volume()
tv.diminuir_volume()
tv.modificar_canal(20)
tv.ligar_desligar()
tv.ligar_desligar()
