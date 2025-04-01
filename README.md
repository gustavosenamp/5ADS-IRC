# 5ADS-IRC

## Repositório do Projeto - Redes de Computadores

Este repositório contém a documentação do projeto desenvolvido para a disciplina de Redes de Computadores no 5º semestre do curso de Análise e Desenvolvimento de Sistemas da Fatec SJC.

---

![image](https://github.com/user-attachments/assets/fa5f5231-81c6-4726-ad71-3d0db0190764)

## 1. Componentes e Conexões

### Usuários
- Conectam-se ao sistema através da internet.
- Podem acessar a rede de forma segura via **VPN Connection**.

### Infraestrutura de Rede
- **Cloud Firewall Rules**: Controla e protege o tráfego de entrada e saída da rede.
- **Load Balancer**: Distribui requisições entre múltiplos servidores web para evitar sobrecarga.
- **Proxy de Servidor**: Atua como um proxy reverso, direcionando requisições para os servidores corretos.
- **Web Servers**: Hospedam as aplicações e processam requisições dos usuários.
- **Banco de Dados SQL**: Centraliza os dados da aplicação, armazenando e recuperando informações conforme necessário.

---

## 2. Fluxo de Dados

1. O usuário acessa o sistema e o tráfego passa pelo **Load Balancer**.
2. O **Load Balancer** distribui as requisições para o **Proxy de Servidor**, que gerencia o fluxo para os **Web Servers**.
3. Os **Web Servers** processam a requisição e, quando necessário, fazem consultas ao **Banco de Dados SQL**.
4. O **Banco de Dados SQL** retorna as informações para os **Web Servers**.
5. Os **Web Servers** enviam a resposta final ao usuário.

---

## 3. Segmentação de Redes

### Rede Pública
- Inclui os **usuários externos**, **Load Balancer** e **Proxy de Servidor**.
- Possui regras no **firewall** para restringir acessos indevidos.

### Rede Interna
- Engloba os **Web Servers** e o **Banco de Dados**.
- Protegida por **firewall** e **VPN**, garantindo que apenas conexões autorizadas tenham acesso.

---

## 4. Endereçamento IPv4

A segmentação foi feita da seguinte forma:

| Segmento            | Faixa de IP          |
|---------------------|---------------------|
| **Rede Pública (DMZ)** | `192.168.10.0/24` |
| **Rede Interna (Servidores Web)** | `192.168.20.0/24` |
| **Rede de Banco de Dados** | `192.168.30.0/24` |
| **Rede VPN** | `192.168.40.0/24` |


