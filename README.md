# 5ADS-IRC

## Repositório do Projeto - Redes de Computadores

Este repositório contém a documentação do projeto desenvolvido para a disciplina de Redes de Computadores no 5º semestre do curso de Análise e Desenvolvimento de Sistemas da Fatec SJC.

---

![image](https://github.com/user-attachments/assets/3878e2ae-b184-4ead-b1d9-c9a5c50f21a6)

## 1. Componentes e Conexões

### Usuários
- Conectam-se ao sistema através da internet.
- Podem acessar a rede de forma segura via **VPN Connection**.

### Infraestrutura de Rede
- **OpenVPN**: Estabelece uma conexão segura entre os usuários e a rede da aplicação.
- **Docker Compose**: Utilizado para orquestrar os containers da aplicação, incluindo o serviço de VPN.
- **Load Balancer**: Distribui requisições entre múltiplos servidores web para evitar sobrecarga e garantir alta disponibilidade.
- **Proxy Reverso (NGINX)**: Redireciona as requisições do Load Balancer para os servidores apropriados.
- **Servidores Web (Docker/VM)**: Hospedam as aplicações e processam as requisições dos usuários.
- **Banco de Dados SQL (AWS RDS)**: Centraliza os dados da aplicação, sendo responsável pelo armazenamento e recuperação das informações.

---

## 2. Fluxo de Dados

1. O usuário acessa o sistema e o tráfego passa pelo **Load Balancer**.
2. O **Load Balancer** distribui as requisições para o **Proxy Reverso (NGINX)**.
3. O **Proxy Reverso** gerencia o fluxo e direciona as requisições para os **Servidores Web (Docker/VM)**.
4. Os **Servidores Web** processam as requisições e, quando necessário, acessam o **Banco de Dados SQL**.
5. O **Banco de Dados SQL** retorna as informações solicitadas.
6. Os **Servidores Web** enviam a resposta final ao usuário.

---




