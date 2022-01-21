# Baixe a imagem utilizando a tag debiam:stable-slim , que é uma versão reduzida da distribuição

docker pull debian:stable-slim

# Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag )

docker run --name exercise-docker -it debian:stable-slim

# No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container

cat /etc/os-release

#Encerre o terminal ;

ctrl + d

# Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;

docker ps -a

#Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers

docker start exercise-docker
 
docker ps

#Retome o container que foi criado anteriormente nesse exercício

docker start -a exercise-docker

#Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container ;

cat /etc/debian_version

# Encerre o terminal

ctrl + d

# Remova somente o container criado para esse exercício

docker rm exercise-docker
