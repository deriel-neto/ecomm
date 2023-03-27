# ecomm

- Projeto de Ecommerce criando durante o programa LevelUp da Alura

## Os Doze Fatores

### **I. Base de Código** :heavy_check_mark:
Esse projeto esta utilizando o github como controlador de versões.

### **II. Dependências** :heavy_check_mark:
As dependências desse projeto encontram-se declaradas no package.json.

### **III. Configurações** :x:
As configurações estão armazenadas diretório config/ de cada aplicação.

### **IV. Serviços de Apoio** :heavy_check_mark:
É possivel se conectar com outro banco de dados mudando as configurações no diretório config/.

### **V. Construa, lance, execute** :heavy_check_mark:
Para fazer as etapas de buil e run utilizei docker-compose, npm, e para a releaser git e github.

### **VI. Processos** :heavy_check_mark:
Para cumprir esse fator foi utilizado o serviços de apoio de banco de dados para armazenar estados.

### **VII. Vínculo de porta** :heavy_check_mark:
Utilizasse portas para fazer as requisições HTTP do projeto.

### **VIII. Concorrência** :heavy_check_mark:
A aplicação utilizasse de ferramentas de apoio para escalar e expandir de acordo com a necessidade. 

### **IX. Descartabilidade** :heavy_check_mark:
é utilizado docker para iniciar e pausar a aplicação.

### **X. Dev/prod semelhantes** :heavy_check_mark:
O desenvolvimento, teste, produção seguem o mesmo padão.

### **XI. Logs** :heavy_check_mark:
A aplicação exibe e trata os logs sem a responsabilidade de armazena-los.

### **XII. Processos de Admin** :x:
Esse requisito não foi cumprido pois as alterações são armazenadas no git.

_____________________________________________________________________________________

## **Patterns de Microserviços**

### **Serviços de domínio** :heavy_check_mark:
Esse projeto utiliza o modelo REST.

### **Serviços de negócio** :heavy_check_mark:
Os serviços esta divididos em três APIs, são elas : Account, Finance e Product.

### **API Gateway** :x:
Não foi utilizado no projeto.

### **Agregador de processos** :x:
Não foi utilizado no projeto.

### **Edge service** :x:
Não foi utilizado no projeto.

### **Single database vs Bancos diferentes** :heavy_check_mark:
Foram utilizados bancos diferentes.

### **Eventos assíncronos‌** :heavy_check_mark:
Foram utilizadas funções assíncronas quando necessário.

### **Agregação de logs** :x:
Não foi utilizado no projeto.

### **Agregação de métricas** :x:
Não foi utilizado no projeto.

______________________________________________________________________________________

## **Aspectos de microserviços**

### **padronização ou não das stacks do serviço** :x:
Não ouve uma padronização literal pois utilizamos common.js e express.js, bancos de dados relacionais e não relacionais.

### solução para service discovery :heavy_check_mark:
A solução foi utilizar uma DNS interna por meio de contêineres do docker compose.

### aspectos de segurança (rede, aplicação e segurança em repouso) :heavy_check_mark:
A aplicação usa atenção com token JWT.

### tecnologias a adotar para deploy e build :heavy_check_mark:
Para fazer o biuld e deploy utilizamos o docker.

### como lidar com tolerância a falhas em aplicações síncronas :x:
Ao invés de chamar diretamente o microsserviço, pode adicionar um proxy para fazer as requisições para o microsserviço.(Não foi implementado no projeto)

### em que pontos faz sentido usar comunicação assíncrona :heavy_check_mark:
Quando não existe a necessidade de uma reposta imediata.
