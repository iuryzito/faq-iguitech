const HELP_PAGES = [
  {
    "id": "configuracao-administrador-visao-geral-admin",
    "title": "Visão geral Admin",
    "path": "/configuracao-administrador/visao-geral-admin",
    "sourcePath": "/configuracao-administrador/visao-geral-admin",
    "breadcrumbs": [
      "Configuração Administrador"
    ],
    "summary": "Visão geral Admin O Painel Admin é a interface utilizada pelos gestores e colaboradores de uma empresa que utiliza o IGUITECH. Ele é segmentado para permitir tanto a operação diária quanto a configuração estratégica do negócio.",
    "headings": [
      "Entendendo os Níveis de Acesso",
      "1. Administrador (Gestor)",
      "2. Supervisor",
      "3. Usuário (Atendente)",
      "Estrutura de Menus",
      "1. Menus Operacionais (Visíveis para Todos)",
      "2. Menus Administrativos (Restritos)"
    ],
    "topics": [
      "Função: Responsável pela configuração estratégica da conta.",
      "Permissões: Tem acesso total e irrestrito a todos os menus e configurações. É o único que pode conectar canais (WhatsApp), gerenciar assinaturas e alterar configurações de API e Webhooks.",
      "Função: Perfil intermediário focado na gestão de pessoas e análise de métricas, sem poder alterar configurações estruturais críticas (como desconectar canais ou apagar a conta).",
      "Regra de Visualização de Tickets:",
      "Padrão: O Supervisor visualiza todos os tickets e atendimentos (semelhante ao Admin).",
      "Restrito: Existe uma configuração específica em Configurações Geral chamada \"Remover privilégios de visualização do supervisor\". Se ativada, o supervisor passa a ver apenas os tickets vinculados a ele ou à sua fila, comportanto-se como um usuário comum neste aspecto.",
      "Função: Focado exclusivamente na operação de atendimento.",
      "Permissões: Acesso restrito aos menus operacionais. Não visualiza relatórios gerenciais, configurações de sistema ou gestão de outros usuários.",
      "Home: Tela inicial de boas-vindas.",
      "Dashboard: Indicadores e métricas em tempo real."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-visao-geral-admin-01-a95011c860.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Visão geral Admin O Painel Admin é a interface utilizada pelos gestores e colaboradores de uma empresa que utiliza o IGUITECH. Ele é segmentado para permitir tanto a operação diária quanto a configuração estratégica do negócio."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-visao-geral-admin-01-a95011c860.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Entendendo os Níveis de Acesso",
          "1. Administrador (Gestor)",
          "2. Supervisor",
          "3. Usuário (Atendente)",
          "Estrutura de Menus",
          "1. Menus Operacionais (Visíveis para Todos)",
          "2. Menus Administrativos (Restritos)"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin",
    "title": "Administração - Painel Admin",
    "path": "/configuracao-administrador/administracao-painel-admin",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin",
    "breadcrumbs": [
      "Configuração Administrador"
    ],
    "summary": "Administração - Painel Admin",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-01-6da72c0b65.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Administração - Painel Admin"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-01-6da72c0b65.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao",
    "title": "Canais de comunicação",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin"
    ],
    "summary": "Canais de comunicação Disponível para o perfil: Administrador e supervisor A capacidade de centralizar múltiplos canais de comunicação em uma única plataforma é uma das principais funcionalidades do IGUITECH. Esta documentação oferece uma visão geral sobre os tipos de...",
    "headings": [
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Opções de Conexão- Tipo de Canal",
      "1. Meta Oficial",
      "2. WhatsApp não oficial",
      "3. Outros",
      "Ações Gerais da Tela",
      "Gerenciando um Canal Conectado"
    ],
    "topics": [
      "Baileys",
      "WebJs",
      "Evolution",
      "Wuzapi",
      "Z-API",
      "Uazapi",
      "Telegram: Conexão via Bot Tokenãoficial. Extremamente estável e funciona 100% na nuvem.",
      "WebMail: Conexão via protocolo IMAP/SMTP para transformar e-mails recebidos em tickets de atendimento.",
      "WebChat: Widget de chat ao vivo para instalar no seu site institucional.",
      "Hub Notificame: API terceira para Instagram Direct e Facebook Messenger."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-01-b0e0977369.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-02-cc32a50463.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-03-2d41efd662.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-04-8cc2c39318.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-05-bb22ecb922.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-06-0b43cfe63b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-07-1c041f8c21.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "WhatsApp Oficial (OAuth):",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-oficial-oauth-login"
      },
      {
        "label": "Instagram Direct e Facebook Messenger",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/instagram-e-facebook-messenger-via-oauth-login"
      },
      {
        "label": "Waba: WhatsApp Oficial - Cloud API",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-configurar-a-api-oficial-do-whatsapp-waba"
      },
      {
        "label": "👉 Clique aqui para ver o passo a passo de como conectar um novo canal",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Canais de comunicação Disponível para o perfil: Administrador e supervisor A capacidade de centralizar múltiplos canais de comunicação em uma única plataforma é uma das principais funcionalidades do IGUITECH. Esta documentação oferece uma visão geral sobre os tipos de..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-01-b0e0977369.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-02-cc32a50463.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-03-2d41efd662.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-04-8cc2c39318.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-05-bb22ecb922.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-06-0b43cfe63b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-07-1c041f8c21.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Opções de Conexão- Tipo de Canal",
          "1. Meta Oficial",
          "2. WhatsApp não oficial",
          "3. Outros",
          "Ações Gerais da Tela",
          "Gerenciando um Canal Conectado"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como",
    "title": "Como conectar um canal (sessão/número)",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "Como conectar um canal (sessão/número) No menu lateral do seu painel, clique em ADMINISTRAÇÃO, aba Canais. Você verá a seguinte tela: Aqui é onde você fará a conexão com os números oficiais da sua empresa, para realizar os atendimentos.",
    "headings": [
      "Nova conexão",
      "1. Escolha do Tipo de Canal",
      "2. Preencha dos dados",
      "Código de pareamenão",
      "Nome",
      "Atribuições",
      "Importar mensagem do Aparelho",
      "Wavoip",
      "Mensagem de Despedida do Atendimento",
      "Inãormações com IAs"
    ],
    "topics": [
      "Canal padrão: Define se este será o canal principal para envios automáticos do sistema."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-72d6f8a8a4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e2e59c22e4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e365284753.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-8fef79776f.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-d542d54615.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-f7703e60da.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-2d58b4a42e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-cec562f40e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-b1a652e4c1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-c3e6562fad.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-01ac7efef1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-3a81f31743.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-012d5e8b14.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-e162b4e924.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-36045fa200.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-6255d09c8e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-0230d0efb9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-dffc9885f7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-2da8817032.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-8d8264835b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-86ce1b556d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-ca37e90036.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-8063bef7c2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-ddc129abf4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-058c45fa81.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-775bebba45.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ab2a13a94b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ba33fecc52.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-233db268b9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-30683106a5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-43be81d5b0.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-8e2af38b26.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-16-c33ed84024.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-17-9a3c79b988.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-18-83d3908384.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-19-cb5781840c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-20-3627418e88.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "WhatsApp Oficial (OAuth)",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-oficial-oauth-login"
      },
      {
        "label": "Instagram Direct e Facebook Messenger",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/instagram-e-facebook-messenger-via-oauth-login"
      },
      {
        "label": "Waba: WhatsApp Oficial - Cloud API",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-configurar-a-api-oficial-do-whatsapp-waba"
      },
      {
        "label": "Wavoip",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/wavoip-ligacoes-pelo-whatsapp"
      },
      {
        "label": "Wavoip - Ligações pelo WhatsApp",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/wavoip-ligacoes-pelo-whatsapp"
      },
      {
        "label": "Bots e IA",
        "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/bots-e-ia"
      },
      {
        "label": "Proxy IPv4 no Proxy-Seller",
        "path": "/avancado-recursos-tecnicos/boas-praticas-de-infraestrutura/proxy-ipv4-no-proxy-seller"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Como conectar um canal (sessão/número) No menu lateral do seu painel, clique em ADMINISTRAÇÃO, aba Canais. Você verá a seguinte tela: Aqui é onde você fará a conexão com os números oficiais da sua empresa, para realizar os atendimentos."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-72d6f8a8a4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e2e59c22e4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e365284753.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-8fef79776f.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-d542d54615.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-f7703e60da.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-2d58b4a42e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-cec562f40e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-b1a652e4c1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-c3e6562fad.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-01ac7efef1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-3a81f31743.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-012d5e8b14.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-e162b4e924.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-36045fa200.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-6255d09c8e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-0230d0efb9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-dffc9885f7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-2da8817032.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-8d8264835b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-86ce1b556d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-ca37e90036.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-8063bef7c2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-ddc129abf4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-058c45fa81.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-775bebba45.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ab2a13a94b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ba33fecc52.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-233db268b9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-30683106a5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-43be81d5b0.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-8e2af38b26.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-16-c33ed84024.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-17-9a3c79b988.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-18-83d3908384.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-19-cb5781840c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-20-3627418e88.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Nova conexão",
          "1. Escolha do Tipo de Canal",
          "2. Preencha dos dados",
          "Código de pareamenão",
          "Nome",
          "Atribuições",
          "Importar mensagem do Aparelho",
          "Wavoip"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como",
    "title": "Distribuição Automática de Atendimentos",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero/distribuicao-automatica-de-atendimentos",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero/distribuicao-automatica-de-atendimentos",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação",
      "Como conectar um canal (sessão/número)"
    ],
    "summary": "Distribuição Automática de Atendimentos Disponível para o perfil: Administrador e supervisor A distribuição automática de atendimentos atribui novas conversas aos seus atendentes de forma automática, agilizando o primeiro contato e balanceando a carga de trabalho da...",
    "headings": [
      "Método 1: Pela Configuração do Canal",
      "Método 2: Pelo Chatbot"
    ],
    "topics": [
      "Quando Usar: Ideal para operações de atendimento direto, onde você quer que o cliente fale com um atendente o mais rápido possível.",
      "Como Funciona a Lógica: O sistema prioriza a distribuição para um atendente que esteja online e associado à fila principal do canal. Se não houver nenhum atendente online na fila designada, a regra transborda, e o sistema atribui o ticket a qualquer outro atendente que esteja online na plataforma, independentemente da fila dele.",
      "Como Configurar:",
      "Quando Usar: Perfeito para cenários onde o chatbot primeiro qualifica o cliente (coleta inãormações) e só depois transfere para um atendente humano.",
      "Como Funciona a Lógica: Você adiciona uma ação de \"Autodistribuir Ticket\" em seu fluxo. Ao chegar nesta etapa, o sistema distribui o atendimento para um atendente que pertença à fila em questão (a fila onde o chatbot está operando), utilizando o método que você definir.",
      "Opções de Distribuição:",
      "Aleatório (Ranãom): Escolhe um atendente online da fila de forma aleatória.",
      "Balanceado (Balanced): Escolhe o atendente online com o menor número de atendimentos recebidos no dia."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-72d6f8a8a4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e2e59c22e4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e365284753.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-8fef79776f.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-d542d54615.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-f7703e60da.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-2d58b4a42e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-cec562f40e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-b1a652e4c1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-c3e6562fad.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-01ac7efef1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-3a81f31743.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-012d5e8b14.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-e162b4e924.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-36045fa200.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-6255d09c8e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-0230d0efb9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-dffc9885f7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-2da8817032.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-8d8264835b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-86ce1b556d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-ca37e90036.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-8063bef7c2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-ddc129abf4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-058c45fa81.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-775bebba45.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ab2a13a94b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ba33fecc52.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-233db268b9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-30683106a5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-43be81d5b0.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-8e2af38b26.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-16-c33ed84024.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-17-9a3c79b988.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-18-83d3908384.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-19-cb5781840c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-20-3627418e88.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Distribuição Automática de Atendimentos Disponível para o perfil: Administrador e supervisor A distribuição automática de atendimentos atribui novas conversas aos seus atendentes de forma automática, agilizando o primeiro contato e balanceando a carga de trabalho da..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-72d6f8a8a4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e2e59c22e4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e365284753.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-8fef79776f.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-d542d54615.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-f7703e60da.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-2d58b4a42e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-cec562f40e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-b1a652e4c1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-c3e6562fad.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-01ac7efef1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-3a81f31743.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-012d5e8b14.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-e162b4e924.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-36045fa200.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-6255d09c8e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-0230d0efb9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-dffc9885f7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-2da8817032.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-8d8264835b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-86ce1b556d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-ca37e90036.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-8063bef7c2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-ddc129abf4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-058c45fa81.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-775bebba45.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ab2a13a94b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ba33fecc52.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-233db268b9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-30683106a5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-43be81d5b0.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-8e2af38b26.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-16-c33ed84024.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-17-9a3c79b988.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-18-83d3908384.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-19-cb5781840c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-20-3627418e88.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Método 1: Pela Configuração do Canal",
          "Método 2: Pelo Chatbot"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what",
    "title": "WhatsApp Oficial OAuth (login)",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-oficial-oauth-login",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-oficial-oauth-login",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "WhatsApp Oficial OAuth (login) O que é o Modo de Coexistência? Ao utilizar este método, você conecta o seu número à API Oficial da Meta sem precisar desconectá-lo do seu aparelho celular.",
    "headings": [
      "O que é o Modo de Coexistência?",
      "Etapa 0: Ativação do Canal no Painel Super Admin",
      "Etapa 1: Criando a Conexão no Painel Admin",
      "Etapa 2: Autenticação com a Meta e Leitura do QR Code",
      "Etapa 4: Configuração de Pagamenão na Meta"
    ],
    "topics": [
      "Selecione o aplicativo nativo fornecido pela plataforma (ex: teste login inãorporado tech provider IGUITECH ou IGUITECH App).",
      "(Nota: Caso sua empresa seja um Tech Provider aprovado pela Meta, você poderá selecionar seu próprio App configurado previamente).",
      "Abra o aplicativo WhatsApp Business no seu celular.",
      "Você receberá uma notificação da Meta solicitanto a conexão.",
      "Aceite a notificação. O aplicativo solicitará que você faça a leitura de um QR Code (ou aprove o compartilhamenão de conversas) diretamente na tela do computador."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "WhatsApp Oficial OAuth (login) O que é o Modo de Coexistência? Ao utilizar este método, você conecta o seu número à API Oficial da Meta sem precisar desconectá-lo do seu aparelho celular."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "O que é o Modo de Coexistência?",
          "Etapa 0: Ativação do Canal no Painel Super Admin",
          "Etapa 1: Criando a Conexão no Painel Admin",
          "Etapa 2: Autenticação com a Meta e Leitura do QR Code",
          "Etapa 4: Configuração de Pagamenão na Meta"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-inst",
    "title": "Instagram e Facebook Messenger via OAuth (login)",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/instagram-e-facebook-messenger-via-oauth-login",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/instagram-e-facebook-messenger-via-oauth-login",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "Instagram e Facebook Messenger via OAuth (login) Essa é a forma mais rápida e recomendada de realizar a integração com Instagram e Facebook Messenger, pois dispensa a necessidade de criar e aprovar um aplicativo próprio no painel de desenvolvedores da Meta. Etapa 0: Liberação...",
    "headings": [
      "Etapa 0: Liberação no Painel Super Admin (Para ambos os canais)",
      "Como corrigir e se adicionar como Administrador da Página do Facebook:",
      "Etapa 2: Criando as Conexões no Painel Admin",
      "Conectanto o Instagram",
      "Opção B: Conectanto o Facebook Messenger",
      "Pronão!"
    ],
    "topics": [
      "URL / Domínão:",
      "Webhook do Messenger:",
      "Webhook do Instagram:",
      "Chave Secreta (é a mesma tanto para instagram quanto para messenger):",
      "Dica: Certifique-se de estar logado na sua conta do Instagram Business em outra aba do mesmo navegador para que o pop-up a reconheça e faça a vinculação automaticamente.",
      "Faça o login com o seu perfil pessoal (aquele que colocamos como administrador da página na Etapa 2).",
      "Clique em Continuar como [Seu Nome].",
      "Selecione a Página que você deseja conectar ao IGUITECH e conceda as permissões solicitadas."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-inst-02-8fc93ebab7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-inst-04-04ffe76c9a.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-inst-05-9d01966e8a.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-inst-06-02b0be5638.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Instagram e Facebook Messenger via OAuth (login) Essa é a forma mais rápida e recomendada de realizar a integração com Instagram e Facebook Messenger, pois dispensa a necessidade de criar e aprovar um aplicativo próprio no painel de desenvolvedores da Meta. Etapa 0: Liberação..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-inst-02-8fc93ebab7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-inst-04-04ffe76c9a.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-inst-05-9d01966e8a.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-inst-06-02b0be5638.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Etapa 0: Liberação no Painel Super Admin (Para ambos os canais)",
          "Como corrigir e se adicionar como Administrador da Página do Facebook:",
          "Etapa 2: Criando as Conexões no Painel Admin",
          "Conectanto o Instagram",
          "Opção B: Conectanto o Facebook Messenger",
          "Pronão!"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como",
    "title": "Como configurar a API Oficial do WhatsApp (WABA)",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-configurar-a-api-oficial-do-whatsapp-waba",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-configurar-a-api-oficial-do-whatsapp-waba",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "Como configurar a API Oficial do WhatsApp (WABA) Esta documentação detalha o processo completo para configurar a API Oficial do WhatsApp (também conhecida como WABA ou Cloud API) e conectá-la à plataforma IGUITECH. Seguir os passos na ordem correta é fundamental para garantir...",
    "headings": [
      "Tutorial passo-a-passo:",
      "Vídeo 1: Criar número de telefone",
      "Vídeo 2: Configurando número na Meta",
      "Vídeo 3: Configurando WABA no IGUITECH",
      "Vídeo 4: Configurando Webhook de callback",
      "Vídeo 5: Registrar o número e criar templates de mensagens",
      "Documentação das etapas:",
      "Etapa 1: Pré-requisitos e Preparação",
      "Etapa 2: Criação e Configuração do Aplicativo na Meta",
      "Etapa 3: Cadastranão e Verificanto seu Número de Telefone"
    ],
    "topics": [
      "Você não pode usar o mesmo número no aplicativo normal do WhatsApp e na API Oficial.",
      "Se você deseja usar um número que já possui uma conta de WhatsApp, é obrigatório excluir permanentemente a conta de WhatsApp associada a ele antes de continuar. Não basta apenas deletar o aplicativo.",
      "Para testes, recomendamos fortemente a compra de um número virtual.",
      "Clique em \"Criar Aplicativo\".",
      "Selecione \"Outros\"",
      "Selecione o tipo \"Business\".",
      "Dê um nome ao seu aplicativo (ex: \"Waba Cloud API\") e associe-o à sua conta do Gerenciador de Negócios (BM).",
      "Acesse \"Configurações do app\" \"Básico\".",
      "Preencha os campos \"URL da Política de Privacidade\" e \"URL dos Termos de Serviço\".",
      "Após a verificação, a Meta exige um registro de segurança com um PIN de 6 dígitos. Este passo é realizado via API. (token provisório)"
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-72d6f8a8a4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e2e59c22e4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e365284753.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-8fef79776f.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-d542d54615.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-f7703e60da.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-2d58b4a42e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-cec562f40e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-b1a652e4c1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-c3e6562fad.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-01ac7efef1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-3a81f31743.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-012d5e8b14.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-e162b4e924.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-36045fa200.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-6255d09c8e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-0230d0efb9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-dffc9885f7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-2da8817032.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-8d8264835b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-86ce1b556d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-ca37e90036.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-8063bef7c2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-ddc129abf4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-058c45fa81.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-775bebba45.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ab2a13a94b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ba33fecc52.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-233db268b9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-30683106a5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-43be81d5b0.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-8e2af38b26.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-16-c33ed84024.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-17-9a3c79b988.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-18-83d3908384.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-19-cb5781840c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-20-3627418e88.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Como configurar a API Oficial do WhatsApp (WABA) Esta documentação detalha o processo completo para configurar a API Oficial do WhatsApp (também conhecida como WABA ou Cloud API) e conectá-la à plataforma IGUITECH. Seguir os passos na ordem correta é fundamental para garantir..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-72d6f8a8a4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e2e59c22e4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-01-e365284753.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-8fef79776f.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-d542d54615.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-02-f7703e60da.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-2d58b4a42e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-03-cec562f40e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-b1a652e4c1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-04-c3e6562fad.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-01ac7efef1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-05-3a81f31743.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-012d5e8b14.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-06-e162b4e924.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-36045fa200.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-07-6255d09c8e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-0230d0efb9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-08-dffc9885f7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-2da8817032.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-09-8d8264835b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-86ce1b556d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-10-ca37e90036.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-8063bef7c2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-11-ddc129abf4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-058c45fa81.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-12-775bebba45.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ab2a13a94b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-13-ba33fecc52.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-233db268b9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-14-30683106a5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-43be81d5b0.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-15-8e2af38b26.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-16-c33ed84024.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-17-9a3c79b988.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-18-83d3908384.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-19-cb5781840c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-como-20-3627418e88.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Tutorial passo-a-passo:",
          "Vídeo 1: Criar número de telefone",
          "Vídeo 2: Configurando número na Meta",
          "Vídeo 3: Configurando WABA no IGUITECH",
          "Vídeo 4: Configurando Webhook de callback",
          "Vídeo 5: Registrar o número e criar templates de mensagens",
          "Documentação das etapas:",
          "Etapa 1: Pré-requisitos e Preparação"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what",
    "title": "WhatsApp Baileys (Não oficial)",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-baileys-não-oficial",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-baileys-não-oficial",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "WhatsApp Baileys (Não oficial) Atenção: Risco de Banimento O uso de conexões baseadas em APIs não oficiais (como Baileys, WebJs, Evolution, entre outras) acarreta risco de banimento do número pelo WhatsApp, uma vez que estas bibliotecas emulam o comportamento do WhatsApp...",
    "headings": [
      "Passo a passo para conexão",
      "1. Adicionar um canal Baileys",
      "2. Gerar o QR Code",
      "3. Escanear no Aparelho",
      "4. Confirmar a Conexão"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Como conectar um canal (sessão/número)",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "WhatsApp Baileys (Não oficial) Atenção: Risco de Banimento O uso de conexões baseadas em APIs não oficiais (como Baileys, WebJs, Evolution, entre outras) acarreta risco de banimento do número pelo WhatsApp, uma vez que estas bibliotecas emulam o comportamento do WhatsApp..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Passo a passo para conexão",
          "1. Adicionar um canal Baileys",
          "2. Gerar o QR Code",
          "3. Escanear no Aparelho",
          "4. Confirmar a Conexão"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what",
    "title": "WhatsApp WebJs (Não oficial)",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-webjs-não-oficial",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-webjs-não-oficial",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "WhatsApp WebJs (Não oficial) Atenção: Risco de Banimento O uso de conexões baseadas em APIs não oficiais (como Baileys, WebJs, Evolution, entre outras) acarreta risco de banimento do número pelo WhatsApp, uma vez que estas bibliotecas emulam o comportamento do WhatsApp...",
    "headings": [
      "Passo a passo para conexão",
      "1. Adicionar um canal",
      "2. Gerar o QR Code",
      "3. Escanear no Aparelho",
      "4. Confirmar a Conexão"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Como conectar um canal (sessão/número)",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "WhatsApp WebJs (Não oficial) Atenção: Risco de Banimento O uso de conexões baseadas em APIs não oficiais (como Baileys, WebJs, Evolution, entre outras) acarreta risco de banimento do número pelo WhatsApp, uma vez que estas bibliotecas emulam o comportamento do WhatsApp..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Passo a passo para conexão",
          "1. Adicionar um canal",
          "2. Gerar o QR Code",
          "3. Escanear no Aparelho",
          "4. Confirmar a Conexão"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what",
    "title": "WhatsApp Evolution API (Não Oficial)",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-evolution-api-não-oficial",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-evolution-api-não-oficial",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "WhatsApp Evolution API (Não Oficial) Atenção: Risco de Banimento O uso de conexões baseadas em APIs não oficiais (como Baileys, WebJs, Evolution, entre outras) acarreta risco de banimento do número pelo WhatsApp, uma vez que estas bibliotecas emulam o comportamento do...",
    "headings": [
      "Passo a passo para conexão",
      "1. Instalar Evolution API",
      "2. Configuração no Painel Administrativo",
      "3. Adicionar um canal",
      "4. Gerar o QR Code",
      "5. Escanear no Aparelho",
      "6. Confirmar a Conexão"
    ],
    "topics": [
      "Siga as instruções técnicas contidas na página: Instalação: Evolution API",
      "Conectanto uma Instância Existente: Se você já possui uma instância criada na Evolution, basta criar um novo canal no IGUITECH com o mesmo nome exato da instância. O sistema irá sincronizar e configurar o webhook.",
      "Nomenclatura: Não utilize caracteres especiais (como ) no nome da instância, pois isso pode causar falhas na sincronização.",
      "Nome da Instância: Uma vez criado, o nome da instância não pode ser alterado."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Instalação: Evolution API",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-evolution-api-não-oficial/instalacao-evolution-api"
      },
      {
        "label": "Como conectar um canal (sessão/número)",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "WhatsApp Evolution API (Não Oficial) Atenção: Risco de Banimento O uso de conexões baseadas em APIs não oficiais (como Baileys, WebJs, Evolution, entre outras) acarreta risco de banimento do número pelo WhatsApp, uma vez que estas bibliotecas emulam o comportamento do..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Passo a passo para conexão",
          "1. Instalar Evolution API",
          "2. Configuração no Painel Administrativo",
          "3. Adicionar um canal",
          "4. Gerar o QR Code",
          "5. Escanear no Aparelho",
          "6. Confirmar a Conexão"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what",
    "title": "Instalação: Evolution API",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-evolution-api-não-oficial/instalacao-evolution-api",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-evolution-api-não-oficial/instalacao-evolution-api",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação",
      "WhatsApp Evolution API (Não Oficial)"
    ],
    "summary": "Instalação: Evolution API Aviso Importante: Responsabilidade sobre a Instalação e Suporte A Evolution API é uma solução de software de código aberto. Isso significa que todo o processo de instalação, configuração, manutenção contínua e garantia de que a API permaneça online...",
    "headings": [
      "1. Prepare o Ambiente",
      "2. Baixe o Script de Instalação",
      "3. Execute os Comanãos no Terminal",
      "4. Acessando e Conectanto sua API",
      "5. Integração com IGUITECH",
      "Tutorial:"
    ],
    "topics": [
      "Git: Essencial para executar nosso script. Faça o downãoad aqui.",
      "Docker Desktop: A plataforma que vai rodar nossa aplicação. Faça o downãoad aqui.",
      "Baixe aqui o arquivo evolution.rar.",
      "Descompacte o arquivo em uma pasta de fácil acesso no seu computador (por exemplo: C: Evolution)."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Instalação: Evolution API Aviso Importante: Responsabilidade sobre a Instalação e Suporte A Evolution API é uma solução de software de código aberto. Isso significa que todo o processo de instalação, configuração, manutenção contínua e garantia de que a API permaneça online..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "1. Prepare o Ambiente",
          "2. Baixe o Script de Instalação",
          "3. Execute os Comanãos no Terminal",
          "4. Acessando e Conectanto sua API",
          "5. Integração com IGUITECH",
          "Tutorial:"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what",
    "title": "WhatsApp WUZAPI Meow API",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-wuzapi-meow-api",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-wuzapi-meow-api",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "WhatsApp WUZAPI Meow API Atenção: Risco de Banimento O uso de conexões baseadas em APIs não oficiais (como Baileys, WebJs, Evolution, entre outras) acarreta risco de banimento do número pelo WhatsApp, uma vez que estas bibliotecas emulam o comportamento do WhatsApp Web e...",
    "headings": [
      "Passo a passo para conexão",
      "1. Instalar WUZAPI (Meow API)",
      "2. Configuração no Painel Administrativo",
      "3. Adicionar um canal",
      "4. Gerar o QR Code",
      "5. Escanear no Aparelho",
      "6. Confirmar a Conexão"
    ],
    "topics": [
      "Siga as instruções técnicas contidas na página: Instalação: Wuzapi (Meow)",
      "No arquivo de configuração (.env) da sua instalação do Wuzapi, é obrigatório preencher a variável API URL com a URL pública onde sua instância do Wuzapi está acessível."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Instalação: Wuzapi (Meow)",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-wuzapi-meow-api/instalacao-wuzapi-meow"
      },
      {
        "label": "Como conectar um canal (sessão/número)",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "WhatsApp WUZAPI Meow API Atenção: Risco de Banimento O uso de conexões baseadas em APIs não oficiais (como Baileys, WebJs, Evolution, entre outras) acarreta risco de banimento do número pelo WhatsApp, uma vez que estas bibliotecas emulam o comportamento do WhatsApp Web e..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Passo a passo para conexão",
          "1. Instalar WUZAPI (Meow API)",
          "2. Configuração no Painel Administrativo",
          "3. Adicionar um canal",
          "4. Gerar o QR Code",
          "5. Escanear no Aparelho",
          "6. Confirmar a Conexão"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what",
    "title": "Instalação: Wuzapi (Meow)",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-wuzapi-meow-api/instalacao-wuzapi-meow",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-wuzapi-meow-api/instalacao-wuzapi-meow",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação",
      "WhatsApp WUZAPI Meow API"
    ],
    "summary": "Instalação: Wuzapi (Meow) Aviso Importante: Responsabilidade sobre a Instalação e Suporte A Wuzapi (Meow) é uma solução de software de código aberto. Isso significa que todo o processo de instalação, configuração, manutenção contínua e garantia de que a API permaneça online...",
    "headings": [
      "2. Instalação da Aplicação Wuzapi",
      "3. Configuração do Arquivo.env",
      "4. Execução e Gerenciamento com PM2",
      "5. Integração com IGUITECH",
      "Tutorial em Vídeo"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Instalação: Wuzapi (Meow) Aviso Importante: Responsabilidade sobre a Instalação e Suporte A Wuzapi (Meow) é uma solução de software de código aberto. Isso significa que todo o processo de instalação, configuração, manutenção contínua e garantia de que a API permaneça online..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "2. Instalação da Aplicação Wuzapi",
          "3. Configuração do Arquivo.env",
          "4. Execução e Gerenciamento com PM2",
          "5. Integração com IGUITECH",
          "Tutorial em Vídeo"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what",
    "title": "WhatsApp Z-API",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-z-api",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-z-api",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "WhatsApp Z-API A Z-API é uma solução não oficial paga e gerenciada por uma empresa externa. Passo a passo para conexão 1.",
    "headings": [
      "Passo a passo para conexão",
      "1. Contratar a Z-API",
      "2. Configuração no Painel Administrativo",
      "3. Adicionar um canal",
      "4. Gerar o QR Code",
      "5. Escanear no Aparelho",
      "6. Confirmar a Conexão"
    ],
    "topics": [
      "Diferente das outras APIs, a instância precisa ser criada primeiro no painel de controle da Z-API. O IGUITECH não pode criar instâncias na Z-API, apenas conectar-se a existentes.",
      "ID da Instância",
      "Token da Instância"
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Como conectar um canal (sessão/número)",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "WhatsApp Z-API A Z-API é uma solução não oficial paga e gerenciada por uma empresa externa. Passo a passo para conexão 1."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Passo a passo para conexão",
          "1. Contratar a Z-API",
          "2. Configuração no Painel Administrativo",
          "3. Adicionar um canal",
          "4. Gerar o QR Code",
          "5. Escanear no Aparelho",
          "6. Confirmar a Conexão"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what",
    "title": "WhatsApp Uazapi",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-uazapi",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/whatsapp-uazapi",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "WhatsApp Uazapi A Uazapi também é uma solução não oficial paga e gerenciada. Passo a passo para conexão 1.",
    "headings": [
      "Passo a passo para conexão",
      "1. Contratar a Uazapi",
      "2. Configuração no Painel Administrativo",
      "3. Adicionar um canal",
      "4. Gerar o QR Code",
      "5. Escanear no Aparelho",
      "6. Confirmar a Conexão"
    ],
    "topics": [
      "Diferente das outras APIs, a instância precisa ser criada primeiro no painel de controle da Z-API. O IGUITECH não pode criar instâncias na Z-API, apenas conectar-se a existentes.",
      "A) Criar uma Nova Instância:",
      "B) Conectar a uma Instância Existente:"
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Como conectar um canal (sessão/número)",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "WhatsApp Uazapi A Uazapi também é uma solução não oficial paga e gerenciada. Passo a passo para conexão 1."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-18ce8033ab.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5333b8f824.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-5f8138b2c7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-72e3bc3557.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-aea98550d5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-bd6b3b6786.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-01-df7a3654f1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-72a5b4e214.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-8c6f89c237.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-bef8abeb87.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-02-c14b37d70b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-1553068873.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-03-e82342eb40.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-04-7e9cd8d802.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-what-05-b691242d35.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Passo a passo para conexão",
          "1. Contratar a Uazapi",
          "2. Configuração no Painel Administrativo",
          "3. Adicionar um canal",
          "4. Gerar o QR Code",
          "5. Escanear no Aparelho",
          "6. Confirmar a Conexão"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-tele",
    "title": "Telegram",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/telegram",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/telegram",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "Telegram Adicionar um canal Passo passo geral aqui: Como conectar um canal (sessão/número) Especificação Telegram:",
    "headings": [
      "Adicionar um canal",
      "Especificação Telegram:"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-tele-01-99e8905e73.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Como conectar um canal (sessão/número)",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/como-conectar-um-canal-sessao-numero"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Telegram Adicionar um canal Passo passo geral aqui: Como conectar um canal (sessão/número) Especificação Telegram:"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-tele-01-99e8905e73.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Adicionar um canal",
          "Especificação Telegram:"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-webm",
    "title": "Webmail (Gmail)",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/webmail-gmail",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/webmail-gmail",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "Webmail (Gmail) A integração de Webmail com o Gmail permite que você centralize sua comunicação por e-mail diretamente no IGUITECH. Com essa configuração, sua equipe poderá receber as mensagens na caixa de entrada unificada e responder aos e-mails diretamente pelo painel de...",
    "headings": [
      "Passo 1: Criar o Aplicativo no Google Cloud Conãole",
      "Passo 2: Gerar as Credenciais OAuth",
      "Passo 3: Configurar o Canal no IGUITECH",
      "Passo 4: Configurar o SMTP para Envio de Respostas",
      "Como Receber e Responder E-mails na Tela de Atendimento"
    ],
    "topics": [
      "Exemplo: https://app.seudominão.com.br/gmail callback.html.",
      "Usuário: Seu endereço de e-mail remetente.",
      "Senha: Cole a Senha de App de 16 letras gerada no Google (certifique-se de remover os espaços entre as letras).",
      "Recebenão um e-mail: Toda vez que um cliente enviar uma mensagem para a sua conta do Gmail vinculada, ela chegará automaticamente na tela de Atendimentos do IGUITECH, geranão um novo ticket de conversa.",
      "Enviar um e-mail: Para enviar um e-mail, clicar no icone na tela de atendimento e preencha os dados de envio."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-webm-01-51b828e6e1.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Webmail (Gmail) A integração de Webmail com o Gmail permite que você centralize sua comunicação por e-mail diretamente no IGUITECH. Com essa configuração, sua equipe poderá receber as mensagens na caixa de entrada unificada e responder aos e-mails diretamente pelo painel de..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-webm-01-51b828e6e1.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Passo 1: Criar o Aplicativo no Google Cloud Conãole",
          "Passo 2: Gerar as Credenciais OAuth",
          "Passo 3: Configurar o Canal no IGUITECH",
          "Passo 4: Configurar o SMTP para Envio de Respostas",
          "Como Receber e Responder E-mails na Tela de Atendimento"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-e-ma",
    "title": "E-mail (IMAP/SMTP)",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/e-mail-imap-smtp",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/e-mail-imap-smtp",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "E-mail (IMAP/SMTP) A conexão via IMAP/SMTP permite integrar qualquer provedor de e-mail externo (Outlook, Yahoo, Hostgator, Locaweb, servidores próprios, etc.) ao painel de atendimento do IGUITECH. Através desta configuração, o sistema será capaz de receber e-mails como...",
    "headings": [
      "Passo 1: Inãormações Iniciais",
      "Passo 2: Configuração SMTP (Envio)",
      "Passo 3: Configuração IMAP (Recebimenão)",
      "Passo 4: Configurações Avançadas",
      "Passo 5: Webhook do Canal",
      "Avisos e Observações"
    ],
    "topics": [
      "Nome do Canal: Insira um nome para identificar esta conta (ex: E-mail Comercial).",
      "Canal Padrão: Defina se esta será a conta principal de envio de e-mails do sistema.",
      "Servidor SMTP: O endereço do servidor de saída.",
      "Exemplos comuns: smtp.seudominão.com.br ou mail.seudominão.com.br.",
      "Porta SMTP: Geralmente utiliza-se 587 (para conexão TLS) ou 465 (para conexão SSL).",
      "Conexão Segura (SSL/TLS): Ative este campo caso seu provedor exija uma conexão criptografada.",
      "Usuário: O endereço de e-mail completo de autenticação (ex: atendimento@empresa.com.br).",
      "Senha / App Password: A senha da conta de e-mail ou uma \"senha de aplicativo\" gerada no painel do provedor.",
      "E-mail remetente (from): O endereço que aparecerá para o cliente ao receber sua mensagem.",
      "E-mail de resposta (replyTo): O endereço que receberá as respostas caso o cliente responda ao e-mail manualmente."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-e-ma-01-666c113e7a.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-e-ma-02-3bce39381b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-e-ma-03-39d22a5454.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-e-ma-04-b2c922b7ef.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-e-ma-05-5ac1ce6417.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "E-mail (IMAP/SMTP) A conexão via IMAP/SMTP permite integrar qualquer provedor de e-mail externo (Outlook, Yahoo, Hostgator, Locaweb, servidores próprios, etc.) ao painel de atendimento do IGUITECH. Através desta configuração, o sistema será capaz de receber e-mails como..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-e-ma-01-666c113e7a.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-e-ma-02-3bce39381b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-e-ma-03-39d22a5454.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-e-ma-04-b2c922b7ef.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-e-ma-05-5ac1ce6417.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Passo 1: Inãormações Iniciais",
          "Passo 2: Configuração SMTP (Envio)",
          "Passo 3: Configuração IMAP (Recebimenão)",
          "Passo 4: Configurações Avançadas",
          "Passo 5: Webhook do Canal",
          "Avisos e Observações"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-webc",
    "title": "Webchat",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/webchat",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/webchat",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "Webchat A partir da versão 3.1.10, o IGUITECH oferece uma funcionalidade de Webchat nativo, permitindo que você incorpore uma janela de chat diretamente no seu site ou no site dos seus clientes, com as mensagens chegando diretamente na plataforma. Para funcionar, ele requer a...",
    "headings": [
      "Passo a Passo: Instalação e Configuração",
      "Passo 1: Criar o Canal no IGUITECH",
      "Passo 2: Rodar o Autoinstalador no Servidor",
      "Passo 3: Gerar o Widget (Código de Inãorporação)",
      "Passo 4: Inãorporar o Webchat no seu Site",
      "Solução de Problemas: Chat não conecta ou Status não fica verde"
    ],
    "topics": [
      "Qual instância: Escolha a instância do IGUITECH que usará o webchat (geralmente a '1').",
      "Porta: Informe uma porta livre na sua VPS (ex: 5431, 5001). Anote esta porta.",
      "Domínão: Informe o subdomínão que você criou (ex: chat.meusite.com.br).",
      "E-mail: Um e-mail para o certificado SSL (Let's Encrypt).",
      "(Se não aparecer, aguarde alguns instantes e atualize a página. Se persistir, consulte a seção \"Solução de Problemas\" abaixo)."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-webc-01-8c538bf5ff.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Webchat A partir da versão 3.1.10, o IGUITECH oferece uma funcionalidade de Webchat nativo, permitindo que você incorpore uma janela de chat diretamente no seu site ou no site dos seus clientes, com as mensagens chegando diretamente na plataforma. Para funcionar, ele requer a..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-webc-01-8c538bf5ff.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Passo a Passo: Instalação e Configuração",
          "Passo 1: Criar o Canal no IGUITECH",
          "Passo 2: Rodar o Autoinstalador no Servidor",
          "Passo 3: Gerar o Widget (Código de Inãorporação)",
          "Passo 4: Inãorporar o Webchat no seu Site",
          "Solução de Problemas: Chat não conecta ou Status não fica verde"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub-",
    "title": "Hub NotificaMe (Face, Insta, WebChat e Email)",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/hub-notificame-face-insta-webchat-e-email",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/hub-notificame-face-insta-webchat-e-email",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "Hub NotificaMe (Face, Insta, WebChat e Email) Temos a possibilidade de utilizar a API da plataforma externa Hub NotificaMe A. Para utilizar estes canais, é necessário primeiro criar uma conta e contratar um plano diretamente no site deles, pois o pagamento é feito ao...",
    "headings": [
      "Como Configurar a Integração",
      "Como conectar no IGUITECH:"
    ],
    "topics": [
      "Facebook Messenger",
      "Instagram Direct",
      "Webchat (oferecido pela Hub NotificaMe)",
      "E-mail",
      "Antes de conectar ao hub, você deve contratar o seu plano no Hub Notificame e inãormar nas configurações"
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--01-3d46a3751c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--02-51f1367c77.jpg",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--03-b0efa042e9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--04-8626d27ab5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--05-0ed311b005.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--06-c3f8623771.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--07-7336a46a1a.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--08-6e6b8e63a0.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--09-65bebedcc1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--10-816185cfee.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--11-38b8d306cc.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--12-aa813d72ce.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--13-c5998be1ba.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--14-5803d6518f.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--15-fcda2293d4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--16-c7c8281f89.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--17-b157f36b0e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--18-b3eda80ce0.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--19-a2a3fd3b59.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--20-cac1ce11b9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--21-01a488d278.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--22-ee249bd780.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Hub NotificaMe (Face, Insta, WebChat e Email) Temos a possibilidade de utilizar a API da plataforma externa Hub NotificaMe A. Para utilizar estes canais, é necessário primeiro criar uma conta e contratar um plano diretamente no site deles, pois o pagamento é feito ao..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--01-3d46a3751c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--02-51f1367c77.jpg",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--03-b0efa042e9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--04-8626d27ab5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--05-0ed311b005.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--06-c3f8623771.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--07-7336a46a1a.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--08-6e6b8e63a0.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--09-65bebedcc1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--10-816185cfee.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--11-38b8d306cc.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--12-aa813d72ce.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--13-c5998be1ba.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--14-5803d6518f.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--15-fcda2293d4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--16-c7c8281f89.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--17-b157f36b0e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--18-b3eda80ce0.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--19-a2a3fd3b59.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--20-cac1ce11b9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--21-01a488d278.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-hub--22-ee249bd780.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Como Configurar a Integração",
          "Como conectar no IGUITECH:"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-wavo",
    "title": "Wavoip - Ligações pelo WhatsApp",
    "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/wavoip-ligacoes-pelo-whatsapp",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao/wavoip-ligacoes-pelo-whatsapp",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Canais de comunicação"
    ],
    "summary": "Wavoip - Ligações pelo WhatsApp Pré-requisitos Uma conta ativa no IGUITECH. Uma conta ativa no Wavoip.",
    "headings": [
      "Pré-requisitos",
      "Passo 1: Criar Dispositivo no Wavoip",
      "Passo 2: Obter o Token de Acesso",
      "Passo 3: Configurar o Canal no IGUITECH",
      "Passo 4: Conectar o Dispositivo (QR Code)"
    ],
    "topics": [
      "Uma conta ativa no IGUITECH.",
      "Uma conta ativa no Wavoip.",
      "O celular com o WhatsApp que será conectado em mãos."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-wavo-01-a683d16710.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-wavo-02-1bb68b0098.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-wavo-03-74237acbc1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-wavo-04-a22d33ada8.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-wavo-05-b296c202de.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Wavoip - Ligações pelo WhatsApp Pré-requisitos Uma conta ativa no IGUITECH. Uma conta ativa no Wavoip."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-wavo-01-a683d16710.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-wavo-02-1bb68b0098.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-wavo-03-74237acbc1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-wavo-04-a22d33ada8.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-canais-de-comunicacao-wavo-05-b296c202de.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Pré-requisitos",
          "Passo 1: Criar Dispositivo no Wavoip",
          "Passo 2: Obter o Token de Acesso",
          "Passo 3: Configurar o Canal no IGUITECH",
          "Passo 4: Conectar o Dispositivo (QR Code)"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-equipes",
    "title": "Equipes",
    "path": "/configuracao-administrador/administracao-painel-admin/equipes",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/equipes",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin"
    ],
    "summary": "Equipes Disponível para o perfil: Administrador e supervisor A página de Equipes é o local central para a organização dos agentes de atendimento. Através dela, o administrador segmenta os colaboradores por especialidade, departamento ou função, permitindo uma distribuição...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso",
      "Detalhamento",
      "Avisos e precauções"
    ],
    "topics": [
      "Segmentação de Atendimento: Criação de departamentos (ex: Comercial, Suporte, Financeiro).",
      "Gestão de Membros: Vinculação de usuários específicos a cada equipe.",
      "Controle de Visibilidade: Ativação ou desativação de equipes conãorme a demanda.",
      "Organização Visual: Personalização de cada equipe com fotos identificadoras.",
      "Campo de Busca: Permite localizar uma equipe específica pelo nome.",
      "Botão + Nova Equipe: Abre o formulário para criação de um novo grupo de atendimento.",
      "ID: Identificador único da equipe no banão de dados.",
      "Nome: Nome atribuído à equipe (ex: Suporte, Vendas).",
      "Status: Indica se a equipe está Ativa (apta a receber tickets) ou Inativa.",
      "Membros: Exibe a quantidade de usuários vinculados àquela equipe."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-equipes-01-36b06bee24.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-equipes-02-b607a44027.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-equipes-03-5c03a116c9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-equipes-04-06e91c0978.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Chat Privado",
        "path": "/ferramentas-do-atendimento/atendimento/chat-privado"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Equipes Disponível para o perfil: Administrador e supervisor A página de Equipes é o local central para a organização dos agentes de atendimento. Através dela, o administrador segmenta os colaboradores por especialidade, departamento ou função, permitindo uma distribuição..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-equipes-01-36b06bee24.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-equipes-02-b607a44027.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-equipes-03-5c03a116c9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-equipes-04-06e91c0978.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso",
          "Detalhamento",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-usuarios",
    "title": "Usuários",
    "path": "/configuracao-administrador/administracao-painel-admin/usuarios",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/usuarios",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin"
    ],
    "summary": "Usuários Disponível para o perfil: Administrador A página de Usuários é o centro de gestão de acessos do sistema IGUITECH. Nela, o administrador realiza o cadastro de novos colaboradores, define níveis de hierarquia através de perfis, controla permissões de visibilidade...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso",
      "Detalhamento",
      "Perfis de Acesso",
      "Usuário Restrito",
      "Na Tela de Atendimento (Chat)",
      "Avisos e precauções"
    ],
    "topics": [
      "Gestão de Identidade: Cadastro e edição de credenciais de acesso (e-mail e senha).",
      "Hierarquia de Acesso: Atribuição de perfis (Administrador, Supervisor, Atendente ou Personalizado).",
      "Controle de Módulos: Definição manual de quais menus cada usuário pode visualizar.",
      "Integração de Telefonia: Configuração de ramais SIP e permissões para chamadas via WaVoIP.",
      "Jornada de Trabalho: Estabelecimenão de horários de atendimento individuais por usuário.",
      "Nome/E-mail: Identificação do colaborador e sua credencial de login.",
      "Perfil: Badge que indica o nível de acesso (Admin, Supervisor, Atendente ou Perfis Customizados).",
      "Status: Indica se o usuário está Ativo ou Inativo no sistema.",
      "Online: Chave seletora que mostra se o usuário está logado no momenão.",
      "Ícone Gerenciar Filas (Vínculo): Permite vincular o usuário às Filas de Atendimento."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-01-32a3f58889.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-02-6e814cee92.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-03-57f1f9adee.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-04-e5f90faf6c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-05-1022cc1823.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-06-66caacb568.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-07-fee956f3f6.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-08-069770cb2c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-09-c50b7422d5.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Gerenciar Perfis",
        "path": "/configuracao-administrador/administracao-painel-admin/usuarios/perfis-de-acesso"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Usuários Disponível para o perfil: Administrador A página de Usuários é o centro de gestão de acessos do sistema IGUITECH. Nela, o administrador realiza o cadastro de novos colaboradores, define níveis de hierarquia através de perfis, controla permissões de visibilidade..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-01-32a3f58889.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-02-6e814cee92.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-03-57f1f9adee.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-04-e5f90faf6c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-05-1022cc1823.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-06-66caacb568.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-07-fee956f3f6.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-08-069770cb2c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-09-c50b7422d5.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso",
          "Detalhamento",
          "Perfis de Acesso",
          "Usuário Restrito"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso",
    "title": "Perfis de Acesso",
    "path": "/configuracao-administrador/administracao-painel-admin/usuarios/perfis-de-acesso",
    "sourcePath": "/configuracao-administrador/administracao-painel-admin/usuarios/perfis-de-acesso",
    "breadcrumbs": [
      "Configuração Administrador",
      "Administração - Painel Admin",
      "Usuários"
    ],
    "summary": "Perfis de Acesso Disponível para o perfil: Administrador A página de Perfis de Acesso permite a criação de templates de permissões reutilizáveis e granulares. Em vez de configurar cada usuário individualmente, o administrador define um perfil padrão (ex: \"Suporte Nível...",
    "headings": [
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso",
      "Detalhamento das Permissões",
      "Avisos e precauções"
    ],
    "topics": [
      "Botão + Novo Perfil: Abre o formulário para criação de um novo template de acesso.",
      "Nome do Perfil: Identificação do template (ex: Atendente Noturno).",
      "Contador de Usuários: Exibe quantos colaboradores estão vinculados àquele perfil no momenão.",
      "Ícone Editar (Lápis): Permite alterar as permissões e o nome do perfil.",
      "Ícone Excluir (Lixeira): Remove o perfil do sistema",
      "Principal: Ter acesso aos menus atendimento, chat-privado, contatos, mensagens-rápidas, painel-atendimento, tarefas e wavoip.",
      "Organização: Ter acesso aos menus agenda, campanhas, funil, galeria, grupo e kanban.",
      "Configuração: Ter acesso aos menus agendamentos, aniversários, auto-resposta, avaliações, chat-flow, etiquetas, fechamento, filas, horário-Atendimento, notas e protocolos.",
      "Relatórios: Ter acesso aos menus audit-log, dashboard, log- ligação e relatórios.",
      "Integrações e Canais: Ter acesso aos menus api-service, sessões e woocommerce-produtos."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-01-eaf5aaa56d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-02-89877bf997.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-03-6b71c90ee2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-04-80afbf2940.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-05-4e82d61edd.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-06-07ccb3fe30.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-07-4694ec978d.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Perfis de Acesso Disponível para o perfil: Administrador A página de Perfis de Acesso permite a criação de templates de permissões reutilizáveis e granulares. Em vez de configurar cada usuário individualmente, o administrador define um perfil padrão (ex: \"Suporte Nível..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-01-eaf5aaa56d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-02-89877bf997.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-03-6b71c90ee2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-04-80afbf2940.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-05-4e82d61edd.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-06-07ccb3fe30.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-administracao-painel-admin-usuarios-perfis-de-acesso-07-4694ec978d.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso",
          "Detalhamento das Permissões",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-automacao",
    "title": "Automação",
    "path": "/configuracao-administrador/automacao",
    "sourcePath": "/configuracao-administrador/automacao",
    "breadcrumbs": [
      "Configuração Administrador"
    ],
    "summary": "Automação - Agendamentos: Visualização de Agendamentos - Aniversários: Visualização de Aniversários - Chat Flow - Gerenciando os fluxos: Robô de Atendimento - Etapas para criação do fluxo: Criando os Fluxos - Possíveis erros: Chatbot nativo - Distribuição sequencial Chatbot...",
    "headings": [],
    "topics": [
      "Agendamentos: Visualização de Agendamentos",
      "Aniversários: Visualização de Aniversários",
      "Chat Flow",
      "Gerenciando os fluxos: Robô de Atendimento",
      "Etapas para criação do fluxo: Criando os Fluxos",
      "Possíveis erros: Chatbot nativo",
      "Distribuição sequencial Chatbot"
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Automação - Agendamentos: Visualização de Agendamentos - Aniversários: Visualização de Aniversários - Chat Flow - Gerenciando os fluxos: Robô de Atendimento - Etapas para criação do fluxo: Criando os Fluxos - Possíveis erros: Chatbot nativo - Distribuição sequencial Chatbot..."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Agendamentos: Visualização de Agendamentos",
          "Aniversários: Visualização de Aniversários",
          "Chat Flow",
          "Gerenciando os fluxos: Robô de Atendimento",
          "Etapas para criação do fluxo: Criando os Fluxos",
          "Possíveis erros: Chatbot nativo",
          "Distribuição sequencial Chatbot"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-automacao-agendamentos",
    "title": "Agendamentos",
    "path": "/configuracao-administrador/automacao/agendamentos",
    "sourcePath": "/configuracao-administrador/automacao/agendamentos",
    "breadcrumbs": [
      "Configuração Administrador",
      "Automação"
    ],
    "summary": "Agendamentos Disponível para o perfil: Administrador e Supervisor A página de Agendamentos é uma ferramenta de automação que permite programar o envio de mensagens para datas e horários futuros. Com ela, o gestor ou atendente pode garantir que comunicações importantes,...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso",
      "Detalhamento",
      "Avisos e precauções"
    ],
    "topics": [
      "Programação de Mensagens: Definição exata de dia e hora para o envio.",
      "Gestão de Recorrência: Configuração de disparos repetitivos em intervalos pré-definidos.",
      "Monitoramenão de Status: Acompanhamenão em tempo real se a mensagem foi enviada ou se houve falha.",
      "(ID): Código identificador único do agendamento (UUID).",
      "Contato: Nome do cliente ou número que receberá a mensagem.",
      "Mensagem: Prévia do texto que será enviado.",
      "Agendado para: Data e hora programada para o disparo.",
      "Criado em: Registro de quanto o agendamento foi configurado.",
      "Status: Indica a situação da mensagem ( Pendente, Enviado, Falhou ou Cancelado ).",
      "Ações: Ícones para editar agendamentos pendentes ou excluir registros."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-automacao-agendamentos-01-13262e95e0.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-agendamentos-02-0d310abe8a.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-agendamentos-03-72400ea5fa.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Agendamentos Disponível para o perfil: Administrador e Supervisor A página de Agendamentos é uma ferramenta de automação que permite programar o envio de mensagens para datas e horários futuros. Com ela, o gestor ou atendente pode garantir que comunicações importantes,..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-automacao-agendamentos-01-13262e95e0.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-agendamentos-02-0d310abe8a.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-agendamentos-03-72400ea5fa.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso",
          "Detalhamento",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-automacao-aniversarios",
    "title": "Aniversários",
    "path": "/configuracao-administrador/automacao/aniversarios",
    "sourcePath": "/configuracao-administrador/automacao/aniversarios",
    "breadcrumbs": [
      "Configuração Administrador",
      "Automação"
    ],
    "summary": "Aniversários Disponível para o perfil: Administrador e Supervisor Aniversários Disponível para o perfil: Administrador e Supervisor A página de Aniversários é uma ferramenta de relacionamento voltada para a fidelização de clientes. Nela, o sistema centraliza todos os...",
    "headings": [
      "Aniversários",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Avisos e precauções"
    ],
    "topics": [
      "Barra de Busca: Localiza um contato específico pelo nome ou parte dele.",
      "Contador de Contatos: Exibe o total de pessoas na base que possuem data de nascimenão preenchida.",
      "Colunas da Tabela:",
      "Nome: Identificação do contato.",
      "Número: Telefone vinculado ao cadastro.",
      "Data de Nascimenão: Dia, mês e ano registrados no Contato.",
      "Idade: Cálculo automático da idade atual.",
      "Dias Restantes: Cronômetro regressivo para a próxima celebração.",
      "Ações (Ícone de Balão): Abre o modal para envio de uma mensagem rápida de felicitação."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-automacao-aniversarios-01-6c9f9b8c1e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-aniversarios-02-c7b0b6a116.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-aniversarios-03-8e3c8f0f41.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Aniversários Disponível para o perfil: Administrador e Supervisor Aniversários Disponível para o perfil: Administrador e Supervisor A página de Aniversários é uma ferramenta de relacionamento voltada para a fidelização de clientes. Nela, o sistema centraliza todos os..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-automacao-aniversarios-01-6c9f9b8c1e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-aniversarios-02-c7b0b6a116.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-aniversarios-03-8e3c8f0f41.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Aniversários",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-automacao-chat-flow",
    "title": "Chat Flow",
    "path": "/configuracao-administrador/automacao/chat-flow",
    "sourcePath": "/configuracao-administrador/automacao/chat-flow",
    "breadcrumbs": [
      "Configuração Administrador",
      "Automação"
    ],
    "summary": "Chat Flow O Construtor de Fluxo é a ferramenta nativa do IGUITECH para a criação de chatbots e automações de conversa. Ele permite desenhar jornadas interativas de forma visual, qualificando atendimentos, capturando dados e direcionando clientes sem a necessidade de...",
    "headings": [
      "Conceitos Fundamentais",
      "Interações (Ações Disponíveis)",
      "Condições (Regras de Roteamenão)",
      "Captura e Uso de Variáveis",
      "Configurações Gerais do Fluxo",
      "Ativanão o Fluxo em um Canal",
      "Tutoriais em Vídeo"
    ],
    "topics": [
      "Enviar Mensagem de Texto: Envia uma ou mais mensagens de texto sequenciais.",
      "Enviar Mídia: Envia um documenão, imagem ou outro arquivo.",
      "Agendar Mensagem: Agenda o envio de uma mensagem para uma data e hora futura (ex: 30 minutos, próximo dia, data personalizada).",
      "Enviar SMS: Dispara um SMS para o contato, utilizando uma das integrações de SMS configuradas (Comtele, Connecta, etc.).",
      "Chamar VAPI: Inicia uma chamada de voz automatizada com IA, utilizando a integração com a VAPI.",
      "Delay: Adiciona um atraso em segundos entre o envio de uma mensagem e outra.",
      "Adicionar Novo Fluxo: Transfere o cliente de um fluxo para outro.",
      "Bloquear Chatbot: Impede que o chatbot seja acionado novamente para aquele contato específico em futuras interações. É ideal para ser usado ao final de um fluxo de qualificação.",
      "Adicionar Tag: Aplica uma etiqueta (tag) ao contato (ex: \"lead qualificado\").",
      "Adicionar Kanban: Move ou cria um card para o contato no Funil de Oportunidades."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-01-d4718edf84.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-02-10daa1f8fd.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Chat Flow O Construtor de Fluxo é a ferramenta nativa do IGUITECH para a criação de chatbots e automações de conversa. Ele permite desenhar jornadas interativas de forma visual, qualificando atendimentos, capturando dados e direcionando clientes sem a necessidade de..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-01-d4718edf84.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-02-10daa1f8fd.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Conceitos Fundamentais",
          "Interações (Ações Disponíveis)",
          "Condições (Regras de Roteamenão)",
          "Captura e Uso de Variáveis",
          "Configurações Gerais do Fluxo",
          "Ativanão o Fluxo em um Canal",
          "Tutoriais em Vídeo"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-automacao-chat-flow-gerenciando-os-fluxos",
    "title": "Gerenciando os fluxos",
    "path": "/configuracao-administrador/automacao/chat-flow/gerenciando-os-fluxos",
    "sourcePath": "/configuracao-administrador/automacao/chat-flow/gerenciando-os-fluxos",
    "breadcrumbs": [
      "Configuração Administrador",
      "Automação",
      "Chat Flow"
    ],
    "summary": "Gerenciando os fluxos Disponível para o perfil: Administrador e Supervisor O fluxo é uma forma simplificada e intuitiva de construir o seu Bot de Atendimento. Nessa seção é possível criar quantos fluxos forem necessários para um melhor funcionamento do seu atendimento.",
    "headings": [
      "Novo ChatBot",
      "Gerenciar ChatBots"
    ],
    "topics": [],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Gerenciando os fluxos Disponível para o perfil: Administrador e Supervisor O fluxo é uma forma simplificada e intuitiva de construir o seu Bot de Atendimento. Nessa seção é possível criar quantos fluxos forem necessários para um melhor funcionamento do seu atendimento."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Novo ChatBot",
          "Gerenciar ChatBots"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo",
    "title": "Etapas para criação do fluxo",
    "path": "/configuracao-administrador/automacao/chat-flow/etapas-para-criacao-do-fluxo",
    "sourcePath": "/configuracao-administrador/automacao/chat-flow/etapas-para-criacao-do-fluxo",
    "breadcrumbs": [
      "Configuração Administrador",
      "Automação",
      "Chat Flow"
    ],
    "summary": "Etapas para criação do fluxo Disponível para o perfil: Administrador e Supervisor Exemplo de fluxo Link da Live sobre criação de fluxo: Passo a passo Ao clicar no botão: Você verá a seguinte tela: No canto superior direito você verá as seguintes opções:...",
    "headings": [
      "Exemplo de fluxo",
      "Passo a passo",
      "Início",
      "Configurações",
      "Boas Vindas",
      "Nova Etapa"
    ],
    "topics": [
      "Caso seja o primeiro contato do cliente, o sistema salvará automaticamente na agenda as inãormações do cliente;",
      "O Bot irá interagir nos atendimentos iniciados pelos clientes;",
      "O Bot irá parar de interagir caso o atendimento seja assumido por um usuário.",
      "Qualquer Resposta - Independentemente do que o cliente responder, ele será direcionado para uma outra Etapa do fluxo, Fila de atendimento ou Usuário selecionado.",
      "Respostas - Digite o valor necessário para realizar o mesmo direcionamento e aperte Enter. Esse caso é mais eficaz quanto se é apresentado um menu de atendimento ou uma tabela de serviços/produtos."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-01-34e235930c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-02-e6044fd813.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-03-f5a0b55578.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-04-afa6241d63.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-05-9c18082d79.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-06-b9a4f787ab.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-07-9f85900e6f.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-08-57f03030cb.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-09-40803b0aed.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-10-66546e1a7b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-11-120a9f316a.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-12-138a739758.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Etapas para criação do fluxo Disponível para o perfil: Administrador e Supervisor Exemplo de fluxo Link da Live sobre criação de fluxo: Passo a passo Ao clicar no botão: Você verá a seguinte tela: No canto superior direito você verá as seguintes opções:..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-01-34e235930c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-02-e6044fd813.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-03-f5a0b55578.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-04-afa6241d63.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-05-9c18082d79.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-06-b9a4f787ab.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-07-9f85900e6f.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-08-57f03030cb.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-09-40803b0aed.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-10-66546e1a7b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-11-120a9f316a.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-automacao-chat-flow-etapas-para-criacao-do-fluxo-12-138a739758.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Exemplo de fluxo",
          "Passo a passo",
          "Início",
          "Configurações",
          "Boas Vindas",
          "Nova Etapa"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-automacao-chat-flow-possiveis-erros-chatbbot-nativo",
    "title": "Possíveis erros: Chatbot nativo",
    "path": "/configuracao-administrador/automacao/chat-flow/possiveis-erros-chatbbot-nativo",
    "sourcePath": "/configuracao-administrador/automacao/chat-flow/possiveis-erros-chatbbot-nativo",
    "breadcrumbs": [
      "Configuração Administrador",
      "Automação",
      "Chat Flow"
    ],
    "summary": "Possíveis erros: Chatbot nativo",
    "headings": [],
    "topics": [],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Possíveis erros: Chatbot nativo"
      }
    ]
  },
  {
    "id": "configuracao-administrador-automacao-chat-flow-distribuicao-sequencial-chatbot",
    "title": "Distribuição sequencial Chatbot",
    "path": "/configuracao-administrador/automacao/chat-flow/distribuicao-sequencial-chatbot",
    "sourcePath": "/configuracao-administrador/automacao/chat-flow/distribuicao-sequencial-chatbot",
    "breadcrumbs": [
      "Configuração Administrador",
      "Automação",
      "Chat Flow"
    ],
    "summary": "Distribuição sequencial Chatbot A Distribuição Sequencial (identificada como Método \"S\" ) é um sistema que distribui tickets em uma fila rotativa entre os usuários que estão online. O objetivo é garantir que cada usuário receba tickets de forma sequencial e equilibrada,...",
    "headings": [
      "Como Funciona a Lógica",
      "1. Busca de Usuários Online",
      "2. Validação",
      "3. Busca do ChatFlow",
      "4. Seleção Rotativa",
      "5. Atribuição do Ticket",
      "Resumo"
    ],
    "topics": [
      "Se queueId for fornecido: Busca usuários online associados àquela fila específica.",
      "Se não encontrar (ou não houver fila): Busca todos os usuários online do tenant.",
      "Exclusão: Em ambos os casos, usuários com perfil de Admins ou Superadmins são excluídos da distribuição.",
      "Ordenação: A lista final é ordenada por ID (ASC) para manter uma ordem consistente.",
      "Se não houver usuários online, o processo é encerrado sem atribuir o ticket.",
      "Se houver lastUserId: O sistema avança para o próximo usuário da lista.",
      "Rotação Circular: Se o lastUserId for o último da lista, o sistema volta ao primeiro usuário.",
      "Se não houver lastUserId: O sistema começa distribuinão pelo primeiro usuário da lista (índice 0)."
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Distribuição sequencial Chatbot A Distribuição Sequencial (identificada como Método \"S\" ) é um sistema que distribui tickets em uma fila rotativa entre os usuários que estão online. O objetivo é garantir que cada usuário receba tickets de forma sequencial e equilibrada,..."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Como Funciona a Lógica",
          "1. Busca de Usuários Online",
          "2. Validação",
          "3. Busca do ChatFlow",
          "4. Seleção Rotativa",
          "5. Atribuição do Ticket",
          "Resumo"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial",
    "title": "Gestão Comercial",
    "path": "/configuracao-administrador/gestao-comercial",
    "sourcePath": "/configuracao-administrador/gestao-comercial",
    "breadcrumbs": [
      "Configuração Administrador"
    ],
    "summary": "Gestão Comercial - Operação (Gestão comercial) - Etiquetas: Cadastro de Etiquetas - Fechamentos: Mensagens de Fechamento Personalizadas - Filas: Cadastro de Filas - Horários de Atendimento - Notas: Notas do Atendimento - Produtos WooCommerce - Análises e Registros -...",
    "headings": [],
    "topics": [
      "Operação (Gestão comercial)",
      "Etiquetas: Cadastro de Etiquetas",
      "Fechamentos: Mensagens de Fechamento Personalizadas",
      "Filas: Cadastro de Filas",
      "Horários de Atendimento",
      "Notas: Notas do Atendimento",
      "Produtos WooCommerce",
      "Análises e Registros",
      "Avaliações: Avaliações de Atendimento",
      "Log Ligações"
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Gestão Comercial - Operação (Gestão comercial) - Etiquetas: Cadastro de Etiquetas - Fechamentos: Mensagens de Fechamento Personalizadas - Filas: Cadastro de Filas - Horários de Atendimento - Notas: Notas do Atendimento - Produtos WooCommerce - Análises e Registros -..."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Operação (Gestão comercial)",
          "Etiquetas: Cadastro de Etiquetas",
          "Fechamentos: Mensagens de Fechamento Personalizadas",
          "Filas: Cadastro de Filas",
          "Horários de Atendimento",
          "Notas: Notas do Atendimento",
          "Produtos WooCommerce",
          "Análises e Registros"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-operacao-gestao-comercial",
    "title": "Operação (Gestão comercial)",
    "path": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial",
    "sourcePath": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial"
    ],
    "summary": "Operação (Gestão comercial) - Etiquetas: Cadastro de Etiquetas - Fechamentos: Mensagens de Fechamento Personalizadas - Filas: Cadastro de Filas - Horários de Atendimento - Notas: Notas do Atendimento - Produtos WooCommerce",
    "headings": [],
    "topics": [
      "Etiquetas: Cadastro de Etiquetas",
      "Fechamentos: Mensagens de Fechamento Personalizadas",
      "Filas: Cadastro de Filas",
      "Horários de Atendimento",
      "Notas: Notas do Atendimento",
      "Produtos WooCommerce"
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Operação (Gestão comercial) - Etiquetas: Cadastro de Etiquetas - Fechamentos: Mensagens de Fechamento Personalizadas - Filas: Cadastro de Filas - Horários de Atendimento - Notas: Notas do Atendimento - Produtos WooCommerce"
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Etiquetas: Cadastro de Etiquetas",
          "Fechamentos: Mensagens de Fechamento Personalizadas",
          "Filas: Cadastro de Filas",
          "Horários de Atendimento",
          "Notas: Notas do Atendimento",
          "Produtos WooCommerce"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-operacao-gestao-comercial-etiquetas",
    "title": "Etiquetas",
    "path": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/etiquetas",
    "sourcePath": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/etiquetas",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Operação (Gestão comercial)"
    ],
    "summary": "Etiquetas Disponível para o perfil: Administrador e Supervisor A página de Etiquetas (também conhecidas como tags) é uma ferramenta essencial para a organização e segmentação visual dos atendimentos no IGUITECH. Através dela, o administrador cria identificadores coloridos...",
    "headings": [
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso"
    ],
    "topics": [
      "Campo de Busca: Permite localizar uma etiqueta específica pelo nome.",
      "Botão + Nova Etiqueta: Abre o formulário para criação de um novo identificador.",
      "ID: Número de identificação único da etiqueta no banão de dados.",
      "Nome: Título da etiqueta (ex: Urgente, VIP, Lead).",
      "Cor: Representação visual da etiqueta. O texto interno assume a cor escolhida para facilitar a leitura.",
      "Ações (Ícones):",
      "Lápis (Editar): Permite alterar o nome, a cor ou a palavra-chave de automação.",
      "Lixeira (Excluir): Remove a etiqueta do sistema."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-etiquetas-01-64fc97ee5f.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-etiquetas-02-c7a64bbc27.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-etiquetas-03-ec60bc70c5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-etiquetas-04-406b9ebaac.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Etiquetas Disponível para o perfil: Administrador e Supervisor A página de Etiquetas (também conhecidas como tags) é uma ferramenta essencial para a organização e segmentação visual dos atendimentos no IGUITECH. Através dela, o administrador cria identificadores coloridos..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-etiquetas-01-64fc97ee5f.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-etiquetas-02-c7a64bbc27.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-etiquetas-03-ec60bc70c5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-etiquetas-04-406b9ebaac.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-operacao-gestao-comercial-fechamento",
    "title": "Fechamentos",
    "path": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/fechamentos",
    "sourcePath": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/fechamentos",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Operação (Gestão comercial)"
    ],
    "summary": "Fechamentos Disponível para o perfil: Administrador e Supervisor A página de Motivos de Fechamento permite a padronização e categorização do encerramenão de tickets no sistema IGUITECH. Através desta funcionalidade, o administrador define opções pré-configuradas que os...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso"
    ],
    "topics": [
      "Padronização de Encerramenão: Criação de categorias específicas para o fim do atendimento (ex: Venda Concluída, Dúvida Sanada, Desistência).",
      "Mensagens Automáticas: Configuração de textos que podem ser enviados automaticamente ao cliente no momenão em que o ticket é resolvido.",
      "Nome: Título descritivo do motivo de encerramenão. É o texto que aparecerá para o atendente escolher.",
      "Mensagem: O conteúdo textual que será disparado para o cliente caso este motivo seja selecionado no fechamento.",
      "Ações (Ícones):",
      "Lápis (Editar): Abre o modal para alteração do nome ou da mensagem de fechamento vinculada.",
      "Lixeira (Excluir): Remove permanentemente o motivo da lista de opções do sistema.",
      "Botão + Novo Motivo: Abre o formulário para criação de uma nova categoria de fechamento.",
      "Botão Atualizar: Recarrega a lista para exibir as alterações mais recentes."
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Fechamentos Disponível para o perfil: Administrador e Supervisor A página de Motivos de Fechamento permite a padronização e categorização do encerramenão de tickets no sistema IGUITECH. Através desta funcionalidade, o administrador define opções pré-configuradas que os..."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas",
    "title": "Filas",
    "path": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/filas",
    "sourcePath": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/filas",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Operação (Gestão comercial)"
    ],
    "summary": "Filas Disponível para o perfil: Administrador e supervisor A página de Filas é utilizada para organizar os atendimentos em diferentes departamentos ou categorias (ex: Suporte, Vendas, Financeiro). Elas são fundamentais para o direcionamento correto dos Tickets, permitindo...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso",
      "Atribuir usuários em filas",
      "Casos de Uso Práticos das Filas"
    ],
    "topics": [
      "Segmentação de Setores: Criação de departamentos para organizar o fluxo de entrada.",
      "Gestão de Disponibilidade: Configuração de horários de funcionamento específicos por fila.",
      "Mensagens Personalizadas: Definição de respostas automáticas para períodos em que a fila estiver fechada.",
      "Identificação Visual: Atribuição de cores para facilitar a triagem na Central de Atendimentos.",
      "ID: Identificador único da fila no sistema.",
      "Nome: Nome do departamento ou setor.",
      "Cor: Código hexadecimal e amostra visual da cor atribuída à fila.",
      "Status: Indica se a fila está Ativa (recebendo atendimentos) ou Inativa.",
      "Ações (Ícones):",
      "Lápis (Editar): Abre o modal de configurações da fila."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-01-9d190909b9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-02-a5b2956195.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-03-3159af346c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-04-4b78b0e138.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-05-c172bf6a59.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-06-7194898232.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-07-ad23ef7ead.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Filas Disponível para o perfil: Administrador e supervisor A página de Filas é utilizada para organizar os atendimentos em diferentes departamentos ou categorias (ex: Suporte, Vendas, Financeiro). Elas são fundamentais para o direcionamento correto dos Tickets, permitindo..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-01-9d190909b9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-02-a5b2956195.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-03-3159af346c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-04-4b78b0e138.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-05-c172bf6a59.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-06-7194898232.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-filas-07-ad23ef7ead.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso",
          "Atribuir usuários em filas",
          "Casos de Uso Práticos das Filas"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d",
    "title": "Horários de Atendimento",
    "path": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/horarios-de-atendimento",
    "sourcePath": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/horarios-de-atendimento",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Operação (Gestão comercial)"
    ],
    "summary": "Horários de Atendimento Disponível para o perfil: Administrador A página de Horário de Atendimento permite estabelecer o período operacional global da organização no sistema IGUITECH. Através desta configuração, o administrador define quanto a plataforma deve processar...",
    "headings": [
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso: Horário do Tenant",
      "A Lógica de Hierarquia",
      "Avisos e precauções",
      "Como Configurar os outros Horários de atendimento",
      "Horário por Fila",
      "Horário por Usuário"
    ],
    "topics": [
      "Opções por Dia:",
      "24 horas: O sistema permanece aberto e receptivo durante todo o dia selecionado.",
      "Agendado: Habilita campos para inserção de horários de início e fim. Permite a configuração de até dois períodos (turnos) por dia.",
      "Fechado: O sistema considera a organização inativa durante todo o dia selecionado.",
      "Mensagem Fora do Horário: Campo de texto para redigir a resposta automática enviada aos clientes que contatarem o Canal fora do expediente.",
      "Feriados: Seção para listagem de datas específicas onde o atendimento será bloqueado, independentemente do dia da semana.",
      "Botão Adicionar Feriado: Abre o modal para cadastro de nova data.",
      "Botão Salvar: Aplica todas as alterações realizadas na página.",
      "Onde configurar: Admin Filas (Editar uma Fila) Aba \"Horário de Atendimento\"",
      "Como funciona: Ative os dias da semana desejados, defina os horários de início e fim, e escreva a \"Mensagem de Ausência\" específica para esta fila."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-01-bc8f41bbb7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-02-098b7a59ed.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-03-d4b171ff92.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-04-dfd7842b0b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-05-fc9d86f18b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-06-1d6aae25e1.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Fila",
        "path": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/filas"
      },
      {
        "label": "Usuário",
        "path": "/configuracao-administrador/administracao-painel-admin/usuarios"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Horários de Atendimento Disponível para o perfil: Administrador A página de Horário de Atendimento permite estabelecer o período operacional global da organização no sistema IGUITECH. Através desta configuração, o administrador define quanto a plataforma deve processar..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-01-bc8f41bbb7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-02-098b7a59ed.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-03-d4b171ff92.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-04-dfd7842b0b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-05-fc9d86f18b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-horarios-d-06-1d6aae25e1.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso: Horário do Tenant",
          "A Lógica de Hierarquia",
          "Avisos e precauções",
          "Como Configurar os outros Horários de atendimento",
          "Horário por Fila"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-operacao-gestao-comercial-notas",
    "title": "Notas",
    "path": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/notas",
    "sourcePath": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/notas",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Operação (Gestão comercial)"
    ],
    "summary": "Notas Disponível para o perfil: Administrador e Supervisor A página de Notas centraliza todas as anotações internas realizadas pelos atendentes durante os atendimentos. Essa ferramenta é essencial para a supervisão e o acompanhamento de inãormações estratégicas que não...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Detalhamento",
      "Avisos e precauções"
    ],
    "topics": [
      "Gestão Centralizada: Visualização de todas as notas criadas em diferentes tickets em uma única tela.",
      "Filtro Cronológico: Busca de anotações por intervalos específicos de datas.",
      "Auditoria de Conteúdo: Capacidade de editar ou excluir observações para manter o histórico preciso.",
      "Rastreabilidade: Identificação imediata de qual usuário criou a nota e a qual ticket ela pertence.",
      "Buscar notas...: Campo de busca textual para encontrar termos específicos dentro do conteúdo das anotações.",
      "Data início / Data fim: Filtros de calendário para delimitar o período de exibição dos registros.",
      "Ticket ID: Identificador único do Atendimento onde a nota foi gerada.",
      "Conteúdo: O texto da anotação realizada pelo atendente.",
      "Usuário: Nome do colaborador que redigiu a nota.",
      "Data: Registro do dia e horário exato da criação."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-notas-01-64a81c3874.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-notas-02-69f685da16.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-notas-03-ab550ac482.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-notas-04-3a70a120e9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-notas-05-6b494fc040.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Notas Disponível para o perfil: Administrador e Supervisor A página de Notas centraliza todas as anotações internas realizadas pelos atendentes durante os atendimentos. Essa ferramenta é essencial para a supervisão e o acompanhamento de inãormações estratégicas que não..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-notas-01-64a81c3874.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-notas-02-69f685da16.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-notas-03-ab550ac482.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-notas-04-3a70a120e9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-operacao-gestao-comercial-notas-05-6b494fc040.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Detalhamento",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-operacao-gestao-comercial-produtos-w",
    "title": "Produtos WooCommerce",
    "path": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/produtos-woocommerce",
    "sourcePath": "/configuracao-administrador/gestao-comercial/operacao-gestao-comercial/produtos-woocommerce",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Operação (Gestão comercial)"
    ],
    "summary": "Produtos WooCommerce Em constru??o",
    "headings": [],
    "topics": [],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Produtos WooCommerce Em constru??o"
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-analises-e-registros",
    "title": "Análises e Registros",
    "path": "/configuracao-administrador/gestao-comercial/analises-e-registros",
    "sourcePath": "/configuracao-administrador/gestao-comercial/analises-e-registros",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial"
    ],
    "summary": "Análises e Registros - Avaliações: Avaliações de Atendimento - Log Ligações - Painel de Atendimentos: Visão Geral dos Atendimento - Protocolos: Protocolos de Atendimento - Relatórios: Relatórios Gerais - WaVoIP: Gerenciamento de chamadas WaVoIP",
    "headings": [],
    "topics": [
      "Avaliações: Avaliações de Atendimento",
      "Log Ligações",
      "Painel de Atendimentos: Visão Geral dos Atendimento",
      "Protocolos: Protocolos de Atendimento",
      "Relatórios: Relatórios Gerais",
      "WaVoIP: Gerenciamento de chamadas WaVoIP"
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Análises e Registros - Avaliações: Avaliações de Atendimento - Log Ligações - Painel de Atendimentos: Visão Geral dos Atendimento - Protocolos: Protocolos de Atendimento - Relatórios: Relatórios Gerais - WaVoIP: Gerenciamento de chamadas WaVoIP"
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Avaliações: Avaliações de Atendimento",
          "Log Ligações",
          "Painel de Atendimentos: Visão Geral dos Atendimento",
          "Protocolos: Protocolos de Atendimento",
          "Relatórios: Relatórios Gerais",
          "WaVoIP: Gerenciamento de chamadas WaVoIP"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes",
    "title": "Avaliações",
    "path": "/configuracao-administrador/gestao-comercial/analises-e-registros/avaliacoes",
    "sourcePath": "/configuracao-administrador/gestao-comercial/analises-e-registros/avaliacoes",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Análises e Registros"
    ],
    "summary": "Avaliações Disponível para o perfil: Administrador e Supervisor A página de Avaliações é a ferramenta de controle de qualidade e satisfação do cliente (CSAT) do sistema IGUITECH. Através dela, o gestor pode monitorar o desempenho da equipe, analisar o feedback dos...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Configuração da Pesquisa de Satisfação",
      "Passo a passo para enviar uma avaliação manual",
      "Como consultar o histórico de avaliações do contato"
    ],
    "topics": [
      "Monitoramenão de Satisfação: Visualização das notas atribuídas pelos clientes aos atendimentos.",
      "Configuração de Pesquisa: Personalização total das mensagens de avaliação para cada nível de nota.",
      "Auditoria de Feedback: Acesso direto ao ticket que gerou a avaliação para análise de contexto.",
      "Filtros Superiores: Permitem buscar avaliações por texto, intervalo de datas e nota específica (estrelas).",
      "Ticket: Número identificador do atendimento.",
      "Agente: Nome do atendente que realizou o serviço avaliado.",
      "Nota: Representação visual (estrelas) da satisfação do cliente.",
      "Ações:",
      "Olho (Espiar): Abre a conversa de forma resumida para consulta.",
      "Quadrado com Seta (Ir para atendimento): Direciona para o chat completo na Central de Atendimentos."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-01-842db30615.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-02-05c616e2ab.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-03-475db007f9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-04-6a836beaeb.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-05-384c5063bf.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-06-0f5569caf0.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Avaliações Disponível para o perfil: Administrador e Supervisor A página de Avaliações é a ferramenta de controle de qualidade e satisfação do cliente (CSAT) do sistema IGUITECH. Através dela, o gestor pode monitorar o desempenho da equipe, analisar o feedback dos..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-01-842db30615.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-02-05c616e2ab.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-03-475db007f9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-04-6a836beaeb.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-05-384c5063bf.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-avaliacoes-06-0f5569caf0.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Configuração da Pesquisa de Satisfação",
          "Passo a passo para enviar uma avaliação manual",
          "Como consultar o histórico de avaliações do contato"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-analises-e-registros-log-ligacoes",
    "title": "Log Ligações",
    "path": "/configuracao-administrador/gestao-comercial/analises-e-registros/log-ligacoes",
    "sourcePath": "/configuracao-administrador/gestao-comercial/analises-e-registros/log-ligacoes",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Análises e Registros"
    ],
    "summary": "Log Ligações Disponível para o perfil: Administrador e Supervisor A página de Log de Ligações é o registro histórico de toda a atividade de voz realizada através das integrações de telefonia do sistema IGUITECH (como o WaVoIP). Nela, o gestor pode auditar chamadas...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso"
    ],
    "topics": [
      "Auditoria de Chamadas: Registro detalhado de números de origem e destino.",
      "Controle de Produtividade: Visualização do tempo de duração de cada ligação.",
      "Rastreabilidade por Agente: Identificação de qual Usuário realizou ou atendeu a chamada.",
      "Exportação Gerencial: Geração de relatórios em formato CSV para análises externas.",
      "Painel de Filtros:",
      "Data Início / Data Fim: Delimita o período do histórico.",
      "Status: Filtra chamadas por estado (ex: Encerrada, Chamanão, Falhou).",
      "Agente: Filtra as ligações vinculadas a um Usuário específico.",
      "Número Origem / Destino: Localiza chamadas enãolvenão um telefone específico.",
      "Colunas da Tabela:"
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-log-ligacoes-01-0312d90ab8.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-log-ligacoes-02-3b7ad1126b.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Log Ligações Disponível para o perfil: Administrador e Supervisor A página de Log de Ligações é o registro histórico de toda a atividade de voz realizada através das integrações de telefonia do sistema IGUITECH (como o WaVoIP). Nela, o gestor pode auditar chamadas..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-log-ligacoes-01-0312d90ab8.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-log-ligacoes-02-3b7ad1126b.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend",
    "title": "Painel de Atendimentos",
    "path": "/configuracao-administrador/gestao-comercial/analises-e-registros/painel-de-atendimentos",
    "sourcePath": "/configuracao-administrador/gestao-comercial/analises-e-registros/painel-de-atendimentos",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Análises e Registros"
    ],
    "summary": "Painel de Atendimentos Disponível para o perfil: Administrador O Painel de Atendimentos é o centro de comando para supervisores e administradores do IGUITECH. Diferente da tela operacional de chat, este painel oferece uma visão macro e em tempo real de todos os tickets da...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Explicação dos Campos e Ícones",
      "Passo a passo de uso (Ações em Lote)",
      "Avisos e precauções"
    ],
    "topics": [
      "Monitoramenão Global: Visualização de todos os tickets abertos e pendentes divididos por colunas.",
      "Ações em Massa: Resolução ou transferência de múltiplos atendimentos simultaneamente.",
      "Gestão de Contingência: Reatribuição rápida de tickets entre usuários e filas.",
      "Auditoria Visual: Acesso rápido ao conteúdo das conversas sem necessidade de assumir o ticket.",
      "Ícone de Seta (Atender): Assume o ticket para você, movenão-o para sua central de atendimentos.",
      "Ícone de Olho (Espiar): Abre o histórico da conversa em modo de leitura para supervisão, sem que o cliente saiba e sem assumir a responsabilidade pelo ticket."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-01-1958f10f99.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-02-1a7892ac27.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-03-d90a4e03fb.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-04-2f66efd6c1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-05-eac872e5d1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-06-ca27f87d4d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-07-9df59a9634.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-08-c250897408.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-09-f65d093bd6.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-10-d1f3257fe1.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Painel de Atendimentos Disponível para o perfil: Administrador O Painel de Atendimentos é o centro de comando para supervisores e administradores do IGUITECH. Diferente da tela operacional de chat, este painel oferece uma visão macro e em tempo real de todos os tickets da..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-01-1958f10f99.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-02-1a7892ac27.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-03-d90a4e03fb.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-04-2f66efd6c1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-05-eac872e5d1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-06-ca27f87d4d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-07-9df59a9634.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-08-c250897408.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-09-f65d093bd6.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-painel-de-atend-10-d1f3257fe1.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Explicação dos Campos e Ícones",
          "Passo a passo de uso (Ações em Lote)",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-analises-e-registros-protocolos",
    "title": "Protocolos",
    "path": "/configuracao-administrador/gestao-comercial/analises-e-registros/protocolos",
    "sourcePath": "/configuracao-administrador/gestao-comercial/analises-e-registros/protocolos",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Análises e Registros"
    ],
    "summary": "Protocolos Disponível para o perfil: Administrador e Supervisor A página de Protocolos centraliza todos os números identificadores únicos gerados para os atendimentos no sistema IGUITECH. O protocolo é a garantia de rastreabilidade para o cliente e para a empresa,...",
    "headings": [
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Como gerenciar e enviar protocolos",
      "Detalhamento",
      "Avisos e precauções"
    ],
    "topics": [
      "Barra de Busca: Localiza protocolos digitanto o número gerado ou o ID do ticket.",
      "Filtros de Data (Início/Fim): Delimita a busca por um intervalo de tempo específico.",
      "Colunas da Tabela:",
      "Protocolo: O código identificador gerado pelo sistema.",
      "Ticket ID: O número do Atendimento ao qual o protocolo pertence.",
      "Data: Registro do dia e hora da criação do protocolo.",
      "Ações (Ícones):",
      "Olho (Espiar conversa): Abre a visualização da conversa vinculada sem sair da tela.",
      "Quadrado com Seta (Ir para atendimento): Direciona o usuário para o chat ativo ou histórico na central de atendimentos.",
      "Lápis (Editar): Permite alterar o número do protocolo ou o Ticket ID vinculado."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-protocolos-01-5ff1bca310.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-protocolos-02-48c17e9e3d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-protocolos-03-36e2aedf73.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-protocolos-04-b6e8e49ba3.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-protocolos-05-59f32243db.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Protocolos Disponível para o perfil: Administrador e Supervisor A página de Protocolos centraliza todos os números identificadores únicos gerados para os atendimentos no sistema IGUITECH. O protocolo é a garantia de rastreabilidade para o cliente e para a empresa,..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-protocolos-01-5ff1bca310.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-protocolos-02-48c17e9e3d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-protocolos-03-36e2aedf73.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-protocolos-04-b6e8e49ba3.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-protocolos-05-59f32243db.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Como gerenciar e enviar protocolos",
          "Detalhamento",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-analises-e-registros-relatorios",
    "title": "Relatórios",
    "path": "/configuracao-administrador/gestao-comercial/analises-e-registros/relatorios",
    "sourcePath": "/configuracao-administrador/gestao-comercial/analises-e-registros/relatorios",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Análises e Registros"
    ],
    "summary": "Relatórios Disponível para o perfil: Administrador e Supervisor Disponível para o perfil: Administrador e Supervisor A página de Relatórios é a central de inteligência de dados do sistema IGUITECH. Ela permite a extração de inãormações detalhadas sobre a base de...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Visão Geral dos Relatórios",
      "Ações Disponíveis",
      "Avisos e precauções"
    ],
    "topics": [
      "Extração de Base: Downãoad de listas de contatos com dados cadastrais completos.",
      "Segmentação Geográfica e Comportamental: Relatórios baseados em DDD (Estados) e Etiquetas.",
      "Acompanhamenão de Funil: Análise de contatos distribuídos por colunas de Kanban.",
      "Auditoria de Performance: Métricas de produtividade individual por atendente.",
      "Como usar: Defina a Data Início e Data Fim do período de criação e clique em Gerar Relatório.",
      "Dados exibidos: Nome, WhatsApp, e-mail e inãormações cadastradas nos campos extras.",
      "Finalidade: Auditoria de crescimenão da base e backup de cadastros.",
      "Como usar: Selecione uma ou mais Etiquetas no filtro suspenso e gere o relatório.",
      "Dados exibidos: Nome, WhatsApp e a lista de etiquetas vinculadas ao contato.",
      "Finalidade: Ideal para segmentação de campanhas de marketing e identificação de perfis de consumo."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-01-c3b0406bd8.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-02-5dc87358bc.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-03-2f019ab389.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-04-63890097d6.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-05-e79905c0e1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-06-64753045de.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-07-d7f9b56b21.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-08-be651494e1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-09-9217844722.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-10-58f92c4a47.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Relatórios Disponível para o perfil: Administrador e Supervisor Disponível para o perfil: Administrador e Supervisor A página de Relatórios é a central de inteligência de dados do sistema IGUITECH. Ela permite a extração de inãormações detalhadas sobre a base de..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-01-c3b0406bd8.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-02-5dc87358bc.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-03-2f019ab389.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-04-63890097d6.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-05-e79905c0e1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-06-64753045de.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-07-d7f9b56b21.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-08-be651494e1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-09-9217844722.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-relatorios-10-58f92c4a47.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Visão Geral dos Relatórios",
          "Ações Disponíveis",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-gestao-comercial-analises-e-registros-wavoip",
    "title": "WaVoIP",
    "path": "/configuracao-administrador/gestao-comercial/analises-e-registros/wavoip",
    "sourcePath": "/configuracao-administrador/gestao-comercial/analises-e-registros/wavoip",
    "breadcrumbs": [
      "Configuração Administrador",
      "Gestão Comercial",
      "Análises e Registros"
    ],
    "summary": "WaVoIP Disponível para o perfil: Administrador e Supervisor A página WaVoIP é o módulo dedicado à gestão e auditoria de chamadas telefônicas realizadas através da integração de voz sobre IP do sistema IGUITECH. Esta interface permite autenticar a conta de telefonia,...",
    "headings": [
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso",
      "Detalhamento",
      "Avisos e precauções"
    ],
    "topics": [
      "Aba Login e Chamadas: Utilizada para autenticação padrão via conta de usuário.",
      "E-mail: Endereço de e-mail cadastrado no serviço WaVoIP.",
      "Senha: Senha de acesso vinculada à conta.",
      "Botão Autorizar e Carregar Chamadas: Valida as credenciais e puxa a lista de chamadas recentes para a tela.",
      "Aba Por Token: Utilizada para consultas rápidas através de chaves de integração.",
      "Token WaVoIP: Campo para seleção ou inserção do token de autenticação técnica.",
      "Botão Buscar Chamadas: Filtra o histórico com base no token inãormado."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-wavoip-01-bc29fb8b9a.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-wavoip-02-9ea466f111.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-wavoip-03-0651c8e46a.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "WaVoIP Disponível para o perfil: Administrador e Supervisor A página WaVoIP é o módulo dedicado à gestão e auditoria de chamadas telefônicas realizadas através da integração de voz sobre IP do sistema IGUITECH. Esta interface permite autenticar a conta de telefonia,..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-wavoip-01-bc29fb8b9a.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-wavoip-02-9ea466f111.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-gestao-comercial-analises-e-registros-wavoip-03-0651c8e46a.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso",
          "Detalhamento",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao",
    "title": "Configuração",
    "path": "/configuracao-administrador/configuracao",
    "sourcePath": "/configuracao-administrador/configuracao",
    "breadcrumbs": [
      "Configuração Administrador"
    ],
    "summary": "Configuração - API - Configurações Gerais Admin: Configurações - Configurações Gerais: Configs Gerais - Gerais: Config Gerais - Visibilidade de Tickets para usuários (atendentes) - Transbordo de mensagem (processo de seleção) - SMTP: Config SMTP - Bots e IA: Integrações...",
    "headings": [],
    "topics": [
      "Configurações Gerais Admin: Configurações",
      "Configurações Gerais: Configs Gerais",
      "Gerais: Config Gerais",
      "Visibilidade de Tickets para usuários (atendentes)",
      "Transbordo de mensagem (processo de seleção)",
      "SMTP: Config SMTP",
      "Bots e IA: Integrações externas",
      "Copiloto de IA",
      "Integrações: Integrações Externas",
      "Habilitar Webhooks: Config Webhooks"
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Configuração - API - Configurações Gerais Admin: Configurações - Configurações Gerais: Configs Gerais - Gerais: Config Gerais - Visibilidade de Tickets para usuários (atendentes) - Transbordo de mensagem (processo de seleção) - SMTP: Config SMTP - Bots e IA: Integrações..."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Configurações Gerais Admin: Configurações",
          "Configurações Gerais: Configs Gerais",
          "Gerais: Config Gerais",
          "Visibilidade de Tickets para usuários (atendentes)",
          "Transbordo de mensagem (processo de seleção)",
          "SMTP: Config SMTP",
          "Bots e IA: Integrações externas",
          "Copiloto de IA"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-api",
    "title": "API",
    "path": "/configuracao-administrador/configuracao/api",
    "sourcePath": "/configuracao-administrador/configuracao/api",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração"
    ],
    "summary": "API Disponível para o perfil: Administrador A página de API do sistema IGUITECH é o ambiente destinado à integração técnica entre a plataforma e sistemas externos (como CRMs, sites, ERPs ou automações de marketing). Através desta tela, o administrador gera chaves de...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Criando uma API",
      "Usanão a API e Documentação",
      "Webhooks e Eventos"
    ],
    "topics": [
      "Gestão de Tokens: Criação e revogação de chaves de autenticação.",
      "Documentação Interativa: Acesso direto à lista de endpoints e parâmetros.",
      "Sandbox: Ambiente de teste para validar requisições sem sair do painel.",
      "Webhooks: Configuração de disparos automáticos de eventos do sistema para URLs externas.",
      "Botão Postman: Atalho para baixar a coleção de requisições pré-configuradas para uso no software Postman.",
      "Botão + Nova API: Abre o formulário para gerar uma nova integração vinculada a um canal.",
      "URL de Integração: O endereço base que deve ser utilizado nas chamadas externas.",
      "Bearer Token: A chave secreta de autenticação.",
      "Ícones de Ação:",
      "Atualizar (Seta circular): Gera um novo token para a API selecionada (o anterior é invalidado imediatamente)."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-api-01-9a9cc26847.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-api-02-5dd513aa97.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-api-03-3f2ce9955b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-api-04-67bea0f428.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "API Disponível para o perfil: Administrador A página de API do sistema IGUITECH é o ambiente destinado à integração técnica entre a plataforma e sistemas externos (como CRMs, sites, ERPs ou automações de marketing). Através desta tela, o administrador gera chaves de..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-api-01-9a9cc26847.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-api-02-5dd513aa97.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-api-03-3f2ce9955b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-api-04-67bea0f428.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Criando uma API",
          "Usanão a API e Documentação",
          "Webhooks e Eventos"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin",
    "title": "Configurações Gerais Admin",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração"
    ],
    "summary": "Configurações Gerais Admin Assim que realizar o primeiro login na plataforma, acesse o menu lateral do seu painel e clique no ícone de Configurações. Você verá as seguintes opções na tela:",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-01-766ac3e158.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Configurações Gerais Admin Assim que realizar o primeiro login na plataforma, acesse o menu lateral do seu painel e clique no ícone de Configurações. Você verá as seguintes opções na tela:"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-01-766ac3e158.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes",
    "title": "Configurações Gerais",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin"
    ],
    "summary": "Configurações Gerais Confira a seguir cada seção presente nesse painel: Config. Gerais SMTP Pagamenãos (Se assas ativo)",
    "headings": [],
    "topics": [
      "Config. Gerais",
      "SMTP",
      "Pagamenãos (Se assas ativo)"
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-57d3cc0897.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-b36a8bc4f3.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-c78a0f3b84.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Config. Gerais",
        "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/gerais"
      },
      {
        "label": "SMTP",
        "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/smtp"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Configurações Gerais Confira a seguir cada seção presente nesse painel: Config. Gerais SMTP Pagamenãos (Se assas ativo)"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-57d3cc0897.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-b36a8bc4f3.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-c78a0f3b84.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Config. Gerais",
          "SMTP",
          "Pagamenãos (Se assas ativo)"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes",
    "title": "Gerais",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/gerais",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/gerais",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Configurações Gerais"
    ],
    "summary": "Gerais Confira a seguir cada seção presente nesse painel e suas respectivas descrições: Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição...",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-57d3cc0897.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-b36a8bc4f3.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-c78a0f3b84.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Não visualizar Tickets já atribuidos à outros usuários",
        "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/gerais/visibilidade-de-tickets-para-usuarios-atendentes"
      },
      {
        "label": "Visualizar Tickets sem Usuário ou Fila Atribuído",
        "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/gerais/visibilidade-de-tickets-para-usuarios-atendentes"
      },
      {
        "label": "Transbordo de Mensagens",
        "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/gerais/transbordo-de-mensagem-processo-de-selecao"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Gerais Confira a seguir cada seção presente nesse painel e suas respectivas descrições: Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-57d3cc0897.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-b36a8bc4f3.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-c78a0f3b84.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes",
    "title": "Visibilidade de Tickets para usuários (atendentes)",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/gerais/visibilidade-de-tickets-para-usuarios-atendentes",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/gerais/visibilidade-de-tickets-para-usuarios-atendentes",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Configurações Gerais",
      "Gerais"
    ],
    "summary": "Visibilidade de Tickets para usuários (atendentes) Esta documentação detalha as configurações que permitem ao administrador controlar quais tickets os atendentes (usuários) podem visualizar no painel de atendimento. A gestão correta destas permissões é essencial para...",
    "headings": [
      "Dentro do painel de admin na aba \"Configurações Gerais\" você encontra dois ícones:",
      "Possíveis formas de configurar",
      "1. Para o usuário ver todos os tickets abertos e pendentes das filas associadas à ele",
      "3. Para o usuário ver todos os tickets dele e que não possuam fila ou usuários definidos"
    ],
    "topics": [
      "Não visualizar Tickets já atribuídos à outros usuários",
      "Visualizar Tickets sem Usuário ou Fila Atribuído",
      "Não visualizar Tickets já atribuídos à outros usuários: INATIVO",
      "Visualizar Tickets sem Usuário ou Fila Atribuído: INATIVO",
      "Não visualizar Tickets já atribuídos à outros usuários: ATIVO",
      "Visualizar Tickets sem Usuário ou Fila Atribuído: ATIVO"
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-57d3cc0897.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-b36a8bc4f3.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-c78a0f3b84.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Configurações Gerais",
        "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Visibilidade de Tickets para usuários (atendentes) Esta documentação detalha as configurações que permitem ao administrador controlar quais tickets os atendentes (usuários) podem visualizar no painel de atendimento. A gestão correta destas permissões é essencial para..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-57d3cc0897.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-b36a8bc4f3.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-c78a0f3b84.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Dentro do painel de admin na aba \"Configurações Gerais\" você encontra dois ícones:",
          "Possíveis formas de configurar",
          "1. Para o usuário ver todos os tickets abertos e pendentes das filas associadas à ele",
          "3. Para o usuário ver todos os tickets dele e que não possuam fila ou usuários definidos"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes",
    "title": "Transbordo de mensagem (processo de seleção)",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/gerais/transbordo-de-mensagem-processo-de-selecao",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/gerais/transbordo-de-mensagem-processo-de-selecao",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Configurações Gerais",
      "Gerais"
    ],
    "summary": "Transbordo de mensagem (processo de seleção) O que é o Transbordo Automático? O \"Transbordo de Mensagens\" é uma funcionalidade criada para garantir que um cliente não fique sem resposta caso o atendente responsável pelo seu ticket (atendimento carteirizado) esteja offline.",
    "headings": [
      "O que é o Transbordo Automático?",
      "Como Habilitar",
      "A Lógica de Redistribuição (Passo a Passo)",
      "1. Verificação do Atendente Atual",
      "2. Busca por Atendentes Elegíveis",
      "3. Algoritmo de Balanceamenão de Carga",
      "4. Execução da Transferência",
      "Ponãos-Chave do Transbordo"
    ],
    "topics": [
      "Estar com status online.",
      "Pertencer ao mesmo time (tenant).",
      "Ter permissão de acesso à fila (WhatsApp) do ticket em questão.",
      "Usuários com perfil Superadmin são excluídos da seleção (para não sobrecarregar gestores).",
      "O sistema conta quantos tickets individuais (que não são de grupo) cada atendente elegível recebeu no dia.",
      "O ticket é então atribuído ao atendente que tiver o menor número de tickets recebidos no dia.",
      "O transbordo SÓ acontece se o dono do ticket estiver offline.",
      "A distribuição é balanceada, priorizanão o atendente online que menos recebeu tickets no dia.",
      "Atendentes com perfil Superadmin NUNCA recebem tickets por transbordo.",
      "A contagem de balanceamenão considera apenas tickets individuais, não conversas em grupo."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-57d3cc0897.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-b36a8bc4f3.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-c78a0f3b84.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Transbordo de mensagem (processo de seleção) O que é o Transbordo Automático? O \"Transbordo de Mensagens\" é uma funcionalidade criada para garantir que um cliente não fique sem resposta caso o atendente responsável pelo seu ticket (atendimento carteirizado) esteja offline."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-57d3cc0897.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-b36a8bc4f3.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-c78a0f3b84.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "O que é o Transbordo Automático?",
          "Como Habilitar",
          "A Lógica de Redistribuição (Passo a Passo)",
          "1. Verificação do Atendente Atual",
          "2. Busca por Atendentes Elegíveis",
          "3. Algoritmo de Balanceamenão de Carga",
          "4. Execução da Transferência",
          "Ponãos-Chave do Transbordo"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes",
    "title": "SMTP",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/smtp",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/configuracoes-gerais/smtp",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Configurações Gerais"
    ],
    "summary": "SMTP Configuração do SMTP no painel superadmin: E-Mail (SMTP) Como recuperar senha Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição ----------------------...",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-57d3cc0897.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-b36a8bc4f3.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-c78a0f3b84.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "E-Mail (SMTP)",
        "path": "/configuracao-superadmin/configuracoes/e-mail-smtp-do-tenant"
      },
      {
        "label": "Como recuperar senha",
        "path": "/configuracao-superadmin/configuracoes/e-mail-smtp-do-tenant/como-recuperar-a-senha-smtp"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "SMTP Configuração do SMTP no painel superadmin: E-Mail (SMTP) Como recuperar senha Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição ----------------------..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-57d3cc0897.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-b36a8bc4f3.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-configuracoes-01-c78a0f3b84.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia",
    "title": "Bots e IA",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/bots-e-ia",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/bots-e-ia",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin"
    ],
    "summary": "Bots e IA No painel de Configurações Gerais Bots e IA, você pode centralizar e gerenciar todas as ferramentas de automação e modelos de linguagem que irão operar no seu sistema. A plataforma possui integração nativa com os seguintes serviços: Construtores de Fluxo e...",
    "headings": [
      "Regras de Configuração"
    ],
    "topics": [
      "Construtores de Fluxo e Automação: Typebot, N8N, Dify e DialogFlow.",
      "Modelos de Inteligência Artificial (LLMs): ChatGPT, Grok, Gemini, Qwen, Claude, Deepseek, Ollama e LM Studio.",
      "O que faz: Habilita a comunicação entre o sistema e a ferramenta externa.",
      "Como funciona: Quando ativa, o sistema está pronão para consumir o fluxo de mensagens ou as inãormações processadas pela respectiva integração (ex: as respostas geradas pelo ChatGPT ou as automações do N8N).",
      "O que faz: Aplica a inteligência artificial ou o fluxo de automação de forma global.",
      "Como funciona: Quando ativa, o sistema consumirá o fluxo ou as inãormações dessa integração de forma automática em todos os novos atendimentos que chegarem à plataforma, independentemente do canal. Se estiver inativa, a integração só funcionará nos locais onde for vinculada manualmente."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia-01-971352271b.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Bots e IA No painel de Configurações Gerais Bots e IA, você pode centralizar e gerenciar todas as ferramentas de automação e modelos de linguagem que irão operar no seu sistema. A plataforma possui integração nativa com os seguintes serviços: Construtores de Fluxo e..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia-01-971352271b.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Regras de Configuração"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia-cop",
    "title": "Copiloto de IA",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/bots-e-ia/copiloto-de-ia",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/bots-e-ia/copiloto-de-ia",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Bots e IA"
    ],
    "summary": "Copiloto de IA Disponível para o perfil: Administrador O Copiloto de IA é um assistente inteligente integrado à tela de atendimento do IGUITECH. Ele utiliza modelos de linguagem avançados (como ChatGPT, Gemini ou Claude) para auxiliar o atendente em tempo real, analisando...",
    "headings": [
      "Principais funções",
      "Caso de Uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Explicação dos campos e ícones",
      "Passo a passo de uso",
      "Detalhamento das Funções Adicionais",
      "Avisos e precauções"
    ],
    "topics": [
      "Sugestão de Resposta: Gera sugestões baseadas no contexto da conversa atual.",
      "Análise de Sentimenão: Identifica o tom do cliente (neutro, engajado, impaciente).",
      "Reescrita de Mensagem: Ajusta o tom da resposta (ex: tornar mais simpático ou formal).",
      "Resumo de Conversa: Cria uma síntese de diálogos extenãos para facilitar a leitura rápida.",
      "Habilitar Copiloto: Chave para ativar ou desativar a função na tela de atendimento.",
      "Provedor: Seleção da plataforma de IA (OpenAI, Anthropic, Google Gemini, Groq).",
      "API Key: Campo para colar a chave secreta gerada no provedor escolhido.",
      "Modelo: Identificação técnica da versão da IA (ex: gpt-4o, gemini-1.5-pro).",
      "Prompt de Contexto: Espaço para descrever como a IA deve se comportar e quais inãormações sobre a empresa ela deve conhecer.",
      "OpenAI (ChatGPT): Acesse platform.openai.com, vá em API Keys e crie uma nova."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia-cop-01-4dde3de71f.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia-cop-02-4b00692744.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia-cop-03-af71d105a4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia-cop-04-919de74ee5.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Copiloto de IA Disponível para o perfil: Administrador O Copiloto de IA é um assistente inteligente integrado à tela de atendimento do IGUITECH. Ele utiliza modelos de linguagem avançados (como ChatGPT, Gemini ou Claude) para auxiliar o atendente em tempo real, analisando..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia-cop-01-4dde3de71f.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia-cop-02-4b00692744.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia-cop-03-af71d105a4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-bots-e-ia-cop-04-919de74ee5.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de Uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Explicação dos campos e ícones",
          "Passo a passo de uso",
          "Detalhamento das Funções Adicionais",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes",
    "title": "Integrações",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin"
    ],
    "summary": "Integrações Confira a seguir cada seção presente nesse painel: Webhooks Meta Evolution API Wuzapi Hub Notificame SMS GroqCloud",
    "headings": [],
    "topics": [
      "Webhooks",
      "Meta",
      "Evolution API",
      "Wuzapi",
      "Hub Notificame",
      "GroqCloud"
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-01-243f8b644b.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Integrações Confira a seguir cada seção presente nesse painel: Webhooks Meta Evolution API Wuzapi Hub Notificame SMS GroqCloud"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-01-243f8b644b.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Webhooks",
          "Meta",
          "Evolution API",
          "Wuzapi",
          "Hub Notificame",
          "GroqCloud"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h",
    "title": "Habilitar Webhooks",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-webhooks",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-webhooks",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Integrações"
    ],
    "summary": "Habilitar Webhooks Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição -------------------------------- ---------------------------------------------------------------------------------------------------------------------- Ativar Webhook Quando ativo, o...",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Habilitar Webhooks Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição -------------------------------- ---------------------------------------------------------------------------------------------------------------------- Ativar Webhook Quando ativo, o..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h",
    "title": "Habilitar Meta",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-meta",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-meta",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Integrações"
    ],
    "summary": "Habilitar Meta Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição ----------------- ---------------------------------------------- Token Webhook Token para validação do Webhook na BM da Meta. Webhook Meta URL que deverá ser informada na BM da Meta.",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Habilitar Meta Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição ----------------- ---------------------------------------------- Token Webhook Token para validação do Webhook na BM da Meta. Webhook Meta URL que deverá ser informada na BM da Meta."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h",
    "title": "Habilitar Evolution",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-evolution",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-evolution",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Integrações"
    ],
    "summary": "Habilitar Evolution Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição ----------------- ----------------------------------------- URL da API Informar a url de instalação da Evolution Global Key Informar a Global Key da Evolution Passo a passo para usar...",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Habilitar Evolution Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição ----------------- ----------------------------------------- URL da API Informar a url de instalação da Evolution Global Key Informar a Global Key da Evolution Passo a passo para usar..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h",
    "title": "Habilitar Wuzapi",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-wuzapi",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-wuzapi",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Integrações"
    ],
    "summary": "Habilitar Wuzapi Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição ----------------- -------------------------------------- URL da API Informar a url de instalação da WUZAPI Passo a passo de como usar a Wuzapi:",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Habilitar Wuzapi Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição ----------------- -------------------------------------- URL da API Informar a url de instalação da WUZAPI Passo a passo de como usar a Wuzapi:"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h",
    "title": "Habilitar Hub NotificaMe",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-hub-notificame",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-hub-notificame",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Integrações"
    ],
    "summary": "Habilitar Hub NotificaMe Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição -------------------- --------------------------------------------------------------------------------------------------------------- Seu token notificame Informar o token...",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Habilitar Hub NotificaMe Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição -------------------- --------------------------------------------------------------------------------------------------------------- Seu token notificame Informar o token..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h",
    "title": "Habilitar SMS",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-sms",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-sms",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Integrações"
    ],
    "summary": "Habilitar SMS Nessa seção você tem a opção das permissões: Crie uma conta em comtele.com.br e gera uma chave de API Crie uma conta em Conecta e gera uma chave de API Tipo de Permissão Descrição -------------------- --------------------------------------- Chave de API Comtele...",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Habilitar SMS Nessa seção você tem a opção das permissões: Crie uma conta em comtele.com.br e gera uma chave de API Crie uma conta em Conecta e gera uma chave de API Tipo de Permissão Descrição -------------------- --------------------------------------- Chave de API Comtele..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h",
    "title": "Habilitar GroqCloud",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-groqcloud",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/integracoes/habilitar-groqcloud",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Integrações"
    ],
    "summary": "Habilitar GroqCloud Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição ----------------- ------------------------------------ Chave da API Informar a chave de API da GroqCloud Idioma Idioma padrão para transcrição Modelo Modelo da IA --- Agent...",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Habilitar GroqCloud Nessa seção você tem a opção das permissões: Tipo de Permissão Descrição ----------------- ------------------------------------ Chave da API Informar a chave de API da GroqCloud Idioma Idioma padrão para transcrição Modelo Modelo da IA --- Agent..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-integracoes-h-01-08784dc878.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-crm",
    "title": "CRM",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/crm",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/crm",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin"
    ],
    "summary": "CRM Confira a seguir cada seção presente nesse painel: Kanbans e Lanes Demandas Variáveis",
    "headings": [],
    "topics": [
      "Kanbans e Lanes",
      "Demandas",
      "Variáveis"
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-01-223a032c3a.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "CRM Confira a seguir cada seção presente nesse painel: Kanbans e Lanes Demandas Variáveis"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-01-223a032c3a.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Kanbans e Lanes",
          "Demandas",
          "Variáveis"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-gerenciar",
    "title": "Gerenciar Kanban",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/crm/gerenciar-kanban",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/crm/gerenciar-kanban",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "CRM"
    ],
    "summary": "Gerenciar Kanban No IGUITECH, o Kanban Clássico permite que você mova tickets entre diferentes colunas (lanes) para controlar o fluxo de trabalho da sua equipe. Etapa 1: Criando as Colunas (Lanes) Antes de começar a utilizar o quadro Kanban, é obrigatório definir quais...",
    "headings": [
      "Etapa 1: Criando as Colunas (Lanes)",
      "Adicionando uma nova Lane:",
      "Etapa 2: Visualizando o Quadro Kanban"
    ],
    "topics": [
      "Clique no botão Adicionar (geralmente localizado no topo ou canto da tela).",
      "Defina um nome para a coluna (Ex: \"Aguardanão\", \"Em Atendimento\", \"Finalizado\").",
      "Defina uma cor para facilitar a visualização.",
      "Clique em Salvar.",
      "Kanban Clássico (Configurado aqui): Utilizado para gestão geral de TICKETS e status de atendimentos rápidos. As colunas são configuradas em Configurações CRM Kanban e Lanes.",
      "Kanban do Funil de Vendas: Utilizado para gestão de OPORTUNIDADES, com recursos mais avançados de gerenciamento comercial e de vendas, dentro do módulo Funil."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-gerenciar-01-fdf507b0d7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-gerenciar-02-01476a8cc2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-gerenciar-03-11f8dbd6d7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-gerenciar-04-e8586e9b97.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-gerenciar-05-2d145fdad0.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Gerenciar Kanban No IGUITECH, o Kanban Clássico permite que você mova tickets entre diferentes colunas (lanes) para controlar o fluxo de trabalho da sua equipe. Etapa 1: Criando as Colunas (Lanes) Antes de começar a utilizar o quadro Kanban, é obrigatório definir quais..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-gerenciar-01-fdf507b0d7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-gerenciar-02-01476a8cc2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-gerenciar-03-11f8dbd6d7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-gerenciar-04-e8586e9b97.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-gerenciar-05-2d145fdad0.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Etapa 1: Criando as Colunas (Lanes)",
          "Adicionando uma nova Lane:",
          "Etapa 2: Visualizando o Quadro Kanban"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-demanda",
    "title": "Demanda",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/crm/demanda",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/crm/demanda",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "CRM"
    ],
    "summary": "Demanda Essa seção é extremamente intuitiva. Aqui é onde você cria, edita e exclui as Demandas para a organização dos seus atendimentos.",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-demanda-01-5288c7c67d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-demanda-03-321edbf981.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Demanda Essa seção é extremamente intuitiva. Aqui é onde você cria, edita e exclui as Demandas para a organização dos seus atendimentos."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-demanda-01-5288c7c67d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-demanda-03-321edbf981.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-crm-variaveis",
    "title": "Variáveis",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/crm/variaveis",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/crm/variaveis",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "CRM"
    ],
    "summary": "Variáveis Nessa seção você tem a listagem das variáveis disponíveis no sistema: Tipo de Permissão Descrição ----------------- --------------------- name nome greeting saudação protocol protocolo de abertura email e-mail (se existir) phoneNumber telefone kanban kanban (se...",
    "headings": [],
    "topics": [],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Variáveis Nessa seção você tem a listagem das variáveis disponíveis no sistema: Tipo de Permissão Descrição ----------------- --------------------- name nome greeting saudação protocol protocolo de abertura email e-mail (se existir) phoneNumber telefone kanban kanban (se..."
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-sessoes",
    "title": "Sessões",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/sessoes",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/sessoes",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin"
    ],
    "summary": "Sessões Confira a seguir cada seção presente nesse painel: Listar sessões",
    "headings": [],
    "topics": [
      "Listar sessões"
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-sessoes-01-58b9bbd16e.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Sessões Confira a seguir cada seção presente nesse painel: Listar sessões"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-sessoes-01-58b9bbd16e.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Listar sessões"
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-configuracoes-gerais-admin-sessoes-lista",
    "title": "Listar Sessões",
    "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/sessoes/listar-sessoes",
    "sourcePath": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/sessoes/listar-sessoes",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração",
      "Configurações Gerais Admin",
      "Sessões"
    ],
    "summary": "Listar Sessões Essa seção permite uma visualização rápida dos canais disponíveis e não é afetada pelas updates. Dessa forma, caso algum canal entre em loop, você consegue deletá-lo de forma simples através dessa opção.",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-sessoes-lista-01-b1b3e46bb0.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Listar Sessões Essa seção permite uma visualização rápida dos canais disponíveis e não é afetada pelas updates. Dessa forma, caso algum canal entre em loop, você consegue deletá-lo de forma simples através dessa opção."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-configuracoes-gerais-admin-sessoes-lista-01-b1b3e46bb0.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "configuracao-administrador-configuracao-log-auditoria-admin",
    "title": "Log auditoria (admin)",
    "path": "/configuracao-administrador/configuracao/log-auditoria-admin",
    "sourcePath": "/configuracao-administrador/configuracao/log-auditoria-admin",
    "breadcrumbs": [
      "Configuração Administrador",
      "Configuração"
    ],
    "summary": "Log auditoria (admin) Disponível para o perfil: Administrador A página de Log de Auditoria é a central de transparência e segurança do sistema IGUITECH. Nela, o administrador pode rastrear detalhadamente cada interação realizada na plataforma, identificanto quem executou...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Consultanto e Interpretanto os Logs",
      "Detalhamento: Visualização de Dados (Ícone do Olho)",
      "Avisos e precauções"
    ],
    "topics": [
      "Rastreabilidade Total: Monitoramenão de criações, edições e exclusões de dados.",
      "Segurança e Conãormidade: Registro de endereços IP e histórico de acessos dos usuários.",
      "Filtragem Avançada: Localização de eventos específicos por usuário, período ou tipo de entidade.",
      "Inspeção Técnica: Visualização do corpo técnico das requisições realizadas ao sistema.",
      "Exportação de Dados: Geração de arquivos para auditorias externas.",
      "Filtros Superiores:",
      "Ação: Filtra pelo tipo de operação (ex: Todas as ações, Criar, Atualizar, Deletar).",
      "Entidade: Permite buscar por um recurso específico (ex: tickets, users, Canais).",
      "Usuário: Filtra as ações realizadas por um colaborador específico.",
      "Data Inicial/Final: Define o intervalo de tempo da consulta."
    ],
    "images": [
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-log-auditoria-admin-01-43a26a08e7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-log-auditoria-admin-02-3e2c75b08b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/configuracao-administrador-configuracao-log-auditoria-admin-03-17493f3248.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Log auditoria (admin) Disponível para o perfil: Administrador A página de Log de Auditoria é a central de transparência e segurança do sistema IGUITECH. Nela, o administrador pode rastrear detalhadamente cada interação realizada na plataforma, identificanto quem executou..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-log-auditoria-admin-01-43a26a08e7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-log-auditoria-admin-02-3e2c75b08b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/configuracao-administrador-configuracao-log-auditoria-admin-03-17493f3248.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Consultanto e Interpretanto os Logs",
          "Detalhamento: Visualização de Dados (Ícone do Olho)",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-home-e-dashboard",
    "title": "Home e Dashboard",
    "path": "/ferramentas-do-atendimento/home-e-dashboard",
    "sourcePath": "/ferramentas-do-atendimento/home-e-dashboard",
    "breadcrumbs": [
      "Ferramentas do atendimento"
    ],
    "summary": "Home e Dashboard - Home: Dashboard - Dashboard - Barra de ferramenta geral",
    "headings": [],
    "topics": [
      "Home: Dashboard",
      "Dashboard",
      "Barra de ferramenta geral"
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Home e Dashboard - Home: Dashboard - Dashboard - Barra de ferramenta geral"
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Home: Dashboard",
          "Dashboard",
          "Barra de ferramenta geral"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-home-e-dashboard-home",
    "title": "Home",
    "path": "/ferramentas-do-atendimento/home-e-dashboard/home",
    "sourcePath": "/ferramentas-do-atendimento/home-e-dashboard/home",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Home e Dashboard"
    ],
    "summary": "Home Disponível para o perfil: Administrador, Supervisor e Usuário A página Home é o ponto de partida do sistema IGUITECH após o login. Ela funciona como um cockpit de navegação, oferecenão atalhos visuais e inãormações resumidas para facilitar o início da jornada de...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:"
    ],
    "topics": [
      "Navegação Ágil: Atalhos diretos para os módulos mais utilizados.",
      "Histórico de Navegação: Exibição de páginas visitadas recentemente.",
      "Central de Avisos: Painel com inãormações rápidas e dicas sobre os recursos do sistema.",
      "Identificação de Perfil: Exibição clara do nome do usuário e nível de acesso.",
      "Banner de Saudação: Exibe o nome do usuário logado e o seu nível de permissão (ex: User ou Admin).",
      "Cards de Acesso Principal:",
      "Páginas Recentes: Lista as últimas telas acessadas pelo usuário, permitindo um retorno rápido a uma atividade interrompida.",
      "Inãormações Rápidas: Seção inãormativa com lembretes",
      "Acesso Rápido: Menu lateral direito com links em lista para Campanhas, Dashboard e outros recursos essenciais."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-home-01-7223d50269.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-home-02-ab9ef1a2e2.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Home Disponível para o perfil: Administrador, Supervisor e Usuário A página Home é o ponto de partida do sistema IGUITECH após o login. Ela funciona como um cockpit de navegação, oferecenão atalhos visuais e inãormações resumidas para facilitar o início da jornada de..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-home-01-7223d50269.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-home-02-ab9ef1a2e2.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-home-e-dashboard-dashboard",
    "title": "Dashboard",
    "path": "/ferramentas-do-atendimento/home-e-dashboard/dashboard",
    "sourcePath": "/ferramentas-do-atendimento/home-e-dashboard/dashboard",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Home e Dashboard"
    ],
    "summary": "Dashboard Disponível para o perfil: Administrador, Supervisor e Usuário A página de Dashboard oferece uma visão analítica e centralizada de toda a operação de atendimento no sistema IGUITECH. Através de indicadores de desempenho (KPIs) e gráficos em tempo real, os...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso",
      "Detalhamento da Tabela de Desempenão"
    ],
    "topics": [
      "Monitoramenão em Tempo Real: Visualização instantânea do fluxo de conversas.",
      "Análise de Produtividade: Métricas individuais por agente de atendimento.",
      "Controle de Prazos: Acompanhamenão de tempos médios de espera e atendimento.",
      "Segmentação de Dados: Filtros por período, canais, filas e status.",
      "Filtros de Período: Atalhos rápidos para visualizar dados de Hoje, 7 dias, 30 dias ou 90 dias.",
      "Calendário (De/Até): Permite selecionar um intervalo de datas personalizado.",
      "Chave Conversas/Grupos: Altera a visualização das métricas entre atendimentos individuais e atividades em grupos.",
      "Ícone Atualizar: Recarrega os dados do dashboard para exibir as inãormações mais recentes.",
      "Botão Personalizar: Permite que o usuário reorganize a posição dos gráficos e widgets na tela conãorme sua preferência.",
      "Total de Atendimentos: Soma total de interações no período selecionado."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-dashboard-01-640e3b3c35.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-dashboard-02-54e1597082.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-dashboard-03-0f171bf72e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-dashboard-04-bcc61e0543.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Dashboard Disponível para o perfil: Administrador, Supervisor e Usuário A página de Dashboard oferece uma visão analítica e centralizada de toda a operação de atendimento no sistema IGUITECH. Através de indicadores de desempenho (KPIs) e gráficos em tempo real, os..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-dashboard-01-640e3b3c35.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-dashboard-02-54e1597082.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-dashboard-03-0f171bf72e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-dashboard-04-bcc61e0543.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso",
          "Detalhamento da Tabela de Desempenão"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral",
    "title": "Barra de ferramenta geral",
    "path": "/ferramentas-do-atendimento/home-e-dashboard/barra-de-ferramenta-geral",
    "sourcePath": "/ferramentas-do-atendimento/home-e-dashboard/barra-de-ferramenta-geral",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Home e Dashboard"
    ],
    "summary": "Barra de ferramenta geral Disponível para o perfil: Todos os perfis A Barra de Ferramentas Superior é um componente global e permanente do sistema IGUITECH. Localizada no canto superior direito de todas as telas, ela reúne utilitários essenciais para a operação,...",
    "headings": [
      "Caso de uso",
      "Como acessar a página",
      "Detalhamento dos Ícones e Funcionalidades"
    ],
    "topics": [
      "Como usar: Ao clicar, um painel lateral exibe ações como DELETE (exclusão), POST (criação) ou PUT (edição). Cada registro mostra o recurso afetado (ex: tickets, mensagens) e há quanto tempo ocorreu.",
      "Atualização: Clique no ícone de seta circular no topo do painel para carregar novas ações registradas.",
      "Como usar: Clique na sigla do idioma atual (ex: PT). Uma lista suspensa será exibida com opções como Inglês, Espanãol, Alemão, entre outros. Ao selecionar, o sistema aplica a tradução imediatamente.",
      "Funcionamento: O círculo vermelho com número indica a quantidade de notificações não lidas. Ao clicar, o sistema exibe os detalhes e permite navegar diretamente para a conversa em questão.",
      "Como usar: Utilize este ícone para ler inãormativos sobre atualizações do sistema, manutenções programadas ou avisos administrativos gerais da plataforma.",
      "Como usar: Ao clicar, abre-se um resumo das tarefas pendentes. Caso precise de uma gestão completa, clique no botão \"Ver todas as tarefas\" para ser redirecionado à página de Tarefas do sistema.",
      "Passo a passo:",
      "Como usar: Clique para abrir uma janela de chat flutuante. É possível enviar mensagens de texto e arquivos para sanar dúvidas técnicas sobre a plataforma.",
      "Identificação do Usuário: No topo do menu, são exibidos o nome completo, e-mail de acesso e a tag correspondente ao perfil de acesso (ex: admin, user).",
      "Inãormações de Sistema: Exibe a versão atual do software IGUITECH e o status da Licença (Ativa ou Inativa)."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-01-8e26e9b2c2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-02-5344439b18.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-03-5c2b18f0c0.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-04-993184a37a.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-05-7005c9c847.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-06-bcfab6745e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-07-4aaa71d257.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-08-da7062ced2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-09-b3df232d8c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-10-69fc05b66c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-11-9a399b6a7b.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Barra de ferramenta geral Disponível para o perfil: Todos os perfis A Barra de Ferramentas Superior é um componente global e permanente do sistema IGUITECH. Localizada no canto superior direito de todas as telas, ela reúne utilitários essenciais para a operação,..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-01-8e26e9b2c2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-02-5344439b18.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-03-5c2b18f0c0.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-04-993184a37a.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-05-7005c9c847.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-06-bcfab6745e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-07-4aaa71d257.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-08-da7062ced2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-09-b3df232d8c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-10-69fc05b66c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-home-e-dashboard-barra-de-ferramenta-geral-11-9a399b6a7b.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Caso de uso",
          "Como acessar a página",
          "Detalhamento dos Ícones e Funcionalidades"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-atendimento",
    "title": "Atendimento",
    "path": "/ferramentas-do-atendimento/atendimento",
    "sourcePath": "/ferramentas-do-atendimento/atendimento",
    "breadcrumbs": [
      "Ferramentas do atendimento"
    ],
    "summary": "Atendimento - Tela de Atendimento: Painel de Atendimentos - Menu dos atendimentos - Funcionalidades do atendimento - Atendimento WABA (API Oficial): Painel de Atendimentos - Atendimentos via Ligação (Wavoip): Painel de Atendimentos - Tipos de Arquivos Suportados para Envio -...",
    "headings": [],
    "topics": [
      "Tela de Atendimento: Painel de Atendimentos",
      "Menu dos atendimentos",
      "Funcionalidades do atendimento",
      "Atendimento WABA (API Oficial): Painel de Atendimentos",
      "Atendimentos via Ligação (Wavoip): Painel de Atendimentos",
      "Tipos de Arquivos Suportados para Envio",
      "Visualização de grupos",
      "Chat Privado: Chat",
      "Contatos: Lista de Contatos",
      "Restrição de Acesso a Contatos"
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Atendimento - Tela de Atendimento: Painel de Atendimentos - Menu dos atendimentos - Funcionalidades do atendimento - Atendimento WABA (API Oficial): Painel de Atendimentos - Atendimentos via Ligação (Wavoip): Painel de Atendimentos - Tipos de Arquivos Suportados para Envio -..."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Tela de Atendimento: Painel de Atendimentos",
          "Menu dos atendimentos",
          "Funcionalidades do atendimento",
          "Atendimento WABA (API Oficial): Painel de Atendimentos",
          "Atendimentos via Ligação (Wavoip): Painel de Atendimentos",
          "Tipos de Arquivos Suportados para Envio",
          "Visualização de grupos",
          "Chat Privado: Chat"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-atendimento-tela-de-atendimento",
    "title": "Tela de Atendimento",
    "path": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento",
    "sourcePath": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Atendimento"
    ],
    "summary": "Tela de Atendimento Disponível para o perfil: Administrador, supervisor e usuário Introdução Essa é uma das seções mais importantes da plataforma. é a tela principal onde sua equipe irá interagir com os clientes no dia a dia.",
    "headings": [
      "Introdução",
      "Como acessar",
      "Veja as funções que existem em cada visão:"
    ],
    "topics": [
      "Funcionamento do Atendimento via Chat: Este é o guia principal sobre a interface de chat. Ele cobre como aceitar uma nova conversa, enviar mensagens e arquivos, usar as ferramentas da tela de atendimento, transferir para outra fila e finalizar uma interação por texto.",
      "Particularidades do Atendimento WABA (API Oficial): Entenda as regras específicas para atender em canais da API Oficial do WhatsApp, como a \"janela de 24 horas\" para resposta e como iniciar novas conversas utilizando as \"Mensagens de Template\" aprovadas pela Meta.",
      "Atendimentos via Ligação (Wavoip): Veja como funciona a interface para receber e realizar chamadas de voz do WhatsApp diretamente na plataforma IGUITECH."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-01-9d7aac5d16.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Funcionamento do Atendimento via Chat:",
        "path": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento"
      },
      {
        "label": "Particularidades do Atendimento WABA (API Oficial):",
        "path": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/atendimento-waba-api-oficial"
      },
      {
        "label": "Atendimentos via Ligação (Wavoip):",
        "path": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/atendimentos-via-ligacao-wavoip"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Tela de Atendimento Disponível para o perfil: Administrador, supervisor e usuário Introdução Essa é uma das seções mais importantes da plataforma. é a tela principal onde sua equipe irá interagir com os clientes no dia a dia."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-01-9d7aac5d16.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Introdução",
          "Como acessar",
          "Veja as funções que existem em cada visão:"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos",
    "title": "Menu dos atendimentos",
    "path": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/menu-dos-atendimentos",
    "sourcePath": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/menu-dos-atendimentos",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Atendimento",
      "Tela de Atendimento"
    ],
    "summary": "Menu dos atendimentos Disponível para o perfil: Administrador, supervisor e Usuário A Central de Atendimentos é o núcleo operacional do sistema IGUITECH. Nesta página, o agente gerencia todas as interações com os clientes, organiza fluxos de trabalho por meio de filtros...",
    "headings": [
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Detalhamento de Filtros e Ações",
      "Elemenãos de Controle e Busca",
      "Detalhamento do Card de Atendimento",
      "Avisos e precauções"
    ],
    "topics": [
      "Opções de Visualização: Marque \"Mostrar todos\" para ver tickets de outros atendentes (se tiver permissão), \"Somente não lidos\" para focar em mensagens pendentes, ou \"Inverter ordem\" para ver as mensagens mais antigas primeiro.",
      "Status: Refine sua busca entre tickets Abertos, Pendentes ou Fechados simultaneamente.",
      "Período: Defina uma data de início ( De ) e fim ( Até ) para localizar atendimentos em um intervalo específico.",
      "Filas: Selecione um ou mais departamentos (Ex: Suporte, Vendas) para filtrar apenas as demandas daquelas áreas.",
      "Conexões: Filtre os atendimentos pela origem da mensagem, selecionão o Canal específico (WhatsApp, Instagram, etc).",
      "Usuário: Filtre para ver os tickets atribuídos a um colaborador específico da Equipe.",
      "Etiqueta: Localize contatos segmentados por Etiquetas específicas (Ex: \"Cliente VIP\", \"Aguardanão Pagamenão\").",
      "Kanban: Filtre tickets que estão em etapas específicas do seu fluxo de Kanban.",
      "Selecionar múltiplos: Habilita caixas de seleção ao lado de cada chat para que você possa fechar ou transferir vários tickets de uma só vez.",
      "Iniciar conversa avulsa: Permite enviar uma mensagem para um número que não possui um ticket aberto no momenão."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-01-6b5699b105.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-02-d4c81fca20.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-03-eb14935211.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-04-bd3ca7a64c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-05-84c6968fe6.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-06-adb914277f.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-07-142076703d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-08-66856ef7f6.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-09-c289ddef93.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-10-25daa34e1b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-11-b668a0a9ed.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Menu dos atendimentos Disponível para o perfil: Administrador, supervisor e Usuário A Central de Atendimentos é o núcleo operacional do sistema IGUITECH. Nesta página, o agente gerencia todas as interações com os clientes, organiza fluxos de trabalho por meio de filtros..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-01-6b5699b105.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-02-d4c81fca20.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-03-eb14935211.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-04-bd3ca7a64c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-05-84c6968fe6.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-06-adb914277f.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-07-142076703d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-08-66856ef7f6.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-09-c289ddef93.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-10-25daa34e1b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-menu-dos-atendimentos-11-b668a0a9ed.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Detalhamento de Filtros e Ações",
          "Elemenãos de Controle e Busca",
          "Detalhamento do Card de Atendimento",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api-",
    "title": "Atendimento WABA (API Oficial)",
    "path": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/atendimento-waba-api-oficial",
    "sourcePath": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/atendimento-waba-api-oficial",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Atendimento",
      "Tela de Atendimento"
    ],
    "summary": "Atendimento WABA (API Oficial) A conexão com WABA - API Oficial do WhatsApp possui opções exclusivas. A API Oficial não permite abrir conversas com mensagens aleatórias, dessa forma, a plataforma recebe as mensagens e você poderá respondê-las dentro do período de...",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--01-7f500a4ce9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--02-66831afb9d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--03-97edace424.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--04-ed6bce8f12.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--05-51cc1aab28.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--06-c346025be4.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Atendimento WABA (API Oficial) A conexão com WABA - API Oficial do WhatsApp possui opções exclusivas. A API Oficial não permite abrir conversas com mensagens aleatórias, dessa forma, a plataforma recebe as mensagens e você poderá respondê-las dentro do período de..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--01-7f500a4ce9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--02-66831afb9d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--03-97edace424.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--04-ed6bce8f12.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--05-51cc1aab28.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimento-waba-api--06-c346025be4.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimentos-via-liga",
    "title": "Atendimentos via Ligação (Wavoip)",
    "path": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/atendimentos-via-ligacao-wavoip",
    "sourcePath": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/atendimentos-via-ligacao-wavoip",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Atendimento",
      "Tela de Atendimento"
    ],
    "summary": "Atendimentos via Ligação (Wavoip) A conexão com Baileys oferece integração com Wavoip para envio e recebimenão de ligações por WhatsApp. Ao clicar no botão ligar, uma chamada será realizada para o contato.",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimentos-via-liga-01-431fd95259.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimentos-via-liga-02-e3db7d78ce.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimentos-via-liga-03-e2517ff4bb.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimentos-via-liga-04-b9dfc00e77.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Atendimentos via Ligação (Wavoip) A conexão com Baileys oferece integração com Wavoip para envio e recebimenão de ligações por WhatsApp. Ao clicar no botão ligar, uma chamada será realizada para o contato."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimentos-via-liga-01-431fd95259.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimentos-via-liga-02-e3db7d78ce.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimentos-via-liga-03-e2517ff4bb.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-atendimentos-via-liga-04-b9dfc00e77.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-atendimento-tela-de-atendimento-tipos-de-arquivos-sup",
    "title": "Tipos de Arquivos Suportados para Envio",
    "path": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/tipos-de-arquivos-suportados-para-envio",
    "sourcePath": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/tipos-de-arquivos-suportados-para-envio",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Atendimento",
      "Tela de Atendimento"
    ],
    "summary": "Tipos de Arquivos Suportados para Envio O IGUITECH permite o envio de diversos tipos de arquivos (mídias, documentos, etc.) durante os atendimentos. No entanto, os formatos aceitos dependem diretamente do tipo de canal (API) que está sendo utilizado.",
    "headings": [
      "APIs Não Oficiais (Baileys, WWebJS, etc.)",
      "API Oficial (WABA)"
    ],
    "topics": [
      "Imagens:.jpg,.jpeg,.png (e outros formatos image/ )",
      "Documenãos:.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt",
      "Áudio e Vídeo:.mp4,.mp3,.ogg,.mpeg,.mkv",
      "Compactados:.zip,.rar",
      "Arquivos de Design:.ai,.eps,.psd,.cdr,.key",
      "Dados e Outros:.csv,.xml,.ofx,.kml,.pfx,.p2k",
      "Áudio:.aac,.amr,.mp3,.m4a,.ogg",
      "Imagens:.jpeg,.png,.webp",
      "Vídeo:.mp4,.3gp"
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Tipos de Arquivos Suportados para Envio O IGUITECH permite o envio de diversos tipos de arquivos (mídias, documentos, etc.) durante os atendimentos. No entanto, os formatos aceitos dependem diretamente do tipo de canal (API) que está sendo utilizado."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "APIs Não Oficiais (Baileys, WWebJS, etc.)",
          "API Oficial (WABA)"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-atendimento-tela-de-atendimento-visualizacao-de-grupo",
    "title": "Visualização de grupos",
    "path": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/visualizacao-de-grupos",
    "sourcePath": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento/visualizacao-de-grupos",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Atendimento",
      "Tela de Atendimento"
    ],
    "summary": "Visualização de grupos Esta documentação explica como habilitar a visualização e gestão de Grupos de WhatsApp dentro do painel de atendimento do IGUITECH. Por padrão, o sistema pode ocultar grupos ou não gerar tickets para eles a fim de evitar poluição visual e sobrecarga de...",
    "headings": [
      "Configuração Inicial (Painel Admin)",
      "2. Visualizando no Atendimento"
    ],
    "topics": [
      "Ignorar Mensagens de Grupo:",
      "Ativado (Verde): O sistema NÃO abrirá tickets (conversas) na aba de atendimento quanto chegarem mensagens de grupos.",
      "Desativado (Cinza): O sistema abrirá um ticket novo (ou atualizará o existente) sempre que houver mensagem no grupo, movenão-o para o topo da lista.",
      "Mostrar Grupos para todos os usuários:",
      "Ativado (Verde): Todos os atendentes poderão visualizar e interagir com os grupos vinculados ao número conectado.",
      "Desativado (Cinza): A visualização dos grupos fica restrita (geralmente ao Adminãou responsável direto).",
      "👤 Ícone de Usuário: Exibe apenas conversas privadas (1x1).",
      "👥 Ícone de Grupo: Exibe apenas as conversas de grupos."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-visualizacao-de-grupo-01-ec8d709b9d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-visualizacao-de-grupo-02-194b132c58.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Visualização de grupos Esta documentação explica como habilitar a visualização e gestão de Grupos de WhatsApp dentro do painel de atendimento do IGUITECH. Por padrão, o sistema pode ocultar grupos ou não gerar tickets para eles a fim de evitar poluição visual e sobrecarga de..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-visualizacao-de-grupo-01-ec8d709b9d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-tela-de-atendimento-visualizacao-de-grupo-02-194b132c58.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Configuração Inicial (Painel Admin)",
          "2. Visualizando no Atendimento"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-atendimento-chat-privado",
    "title": "Chat Privado",
    "path": "/ferramentas-do-atendimento/atendimento/chat-privado",
    "sourcePath": "/ferramentas-do-atendimento/atendimento/chat-privado",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Atendimento"
    ],
    "summary": "Chat Privado Disponível para o perfil: Administrador, Supervisor e Usuário O Chat Privado é a ferramenta de comunicação interna do sistema IGUITECH. Ele permite que os agentes e administradores interajam entre si em tempo real, sem a necessidade de ferramentas externas,...",
    "headings": [
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Como iniciar uma conversa interna",
      "Como realizar chamadas de voz ou vídeo",
      "Como enviar arquivos e documentos",
      "Como localizar mensagens e contatos",
      "Avisos e precauções",
      "Configuração de WebRTC TURN (coturn)"
    ],
    "topics": [
      "Busca: Campo para localizar usuários ou equipes pelo nome.",
      "Abas Usuários/Equipes: Alterna entre a visualização de contatos individuais ou grupos de departamentos.",
      "Status de Presença: Uma bolinha verde ao lado do avatar indica que o colega está Online.",
      "Nome e Status: Identificação de com quem você está conversanão.",
      "Ícone de Telefone: Inicia uma chamada de áudio interna.",
      "Ícone de Câmera: Inicia uma videochamada interna.",
      "Emoji (Sorriso): Acesso à biblioteca de ícones expressivos.",
      "Anexo (Clipe): Permite o envio de documentos e imagens do seu computador.",
      "Videoconferência (Monitor): Gera e envia um link de reunião instantânea (Jitsi Meet).",
      "Microfone: Permite gravar e enviar mensagens de áudio."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-chat-privado-01-cac1155696.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-chat-privado-02-da0551945d.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Chat Privado Disponível para o perfil: Administrador, Supervisor e Usuário O Chat Privado é a ferramenta de comunicação interna do sistema IGUITECH. Ele permite que os agentes e administradores interajam entre si em tempo real, sem a necessidade de ferramentas externas,..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-chat-privado-01-cac1155696.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-chat-privado-02-da0551945d.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Como iniciar uma conversa interna",
          "Como realizar chamadas de voz ou vídeo",
          "Como enviar arquivos e documentos",
          "Como localizar mensagens e contatos",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-atendimento-contatos",
    "title": "Contatos",
    "path": "/ferramentas-do-atendimento/atendimento/contatos",
    "sourcePath": "/ferramentas-do-atendimento/atendimento/contatos",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Atendimento"
    ],
    "summary": "Contatos Disponível para o perfil: Administrador, supervisor e usuário A página de Contatos é o diretório central de clientes do sistema IGUITECH. Ela funciona como um CRM integrado, permitindo o armazenamenão, segmentação e gestão de toda a base de dados de pessoas que...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso",
      "Detalhamento das Funções de Utilitários"
    ],
    "topics": [
      "Gestão de Cadastros: Criação, edição e exclusão de fichas de clientes.",
      "Importação e Exportação: Ferramentas para subir listas via CSV ou baixar a base para Excel.",
      "Saneamenão de Base: Funções para remover duplicados e validar o 9º dígito.",
      "Utilitários: Menu com funções de manutenção (Sincronizar Contatos/Grupos, Remover Duplicados, Agrupar LID e Verificar 9º Dígito).",
      "Importar Contatos: Permite o upload de arquivos CSV/XLSX com mapeamenão simples.",
      "Importação Inteligente: Assistente passo a passo para importar bases complexas, identificanto origem e estrutura.",
      "Modelo CSV: Atalho para baixar o arquivo padrão aceito pelo sistema.",
      "Exportar Contatos: Gera um arquivo com os contatos visíveis na tela (respeitanto os filtros aplicados).",
      "Adicionar Contato: Abre o formulário para cadastro manual unitário.",
      "Localize: Busca global por nome, e-mail ou número de telefone."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-contatos-01-64d09d908a.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Contatos Disponível para o perfil: Administrador, supervisor e usuário A página de Contatos é o diretório central de clientes do sistema IGUITECH. Ela funciona como um CRM integrado, permitindo o armazenamenão, segmentação e gestão de toda a base de dados de pessoas que..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-contatos-01-64d09d908a.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso",
          "Detalhamento das Funções de Utilitários"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-atendimento-contatos-restricao-de-acesso-a-contatos",
    "title": "Restrição de Acesso a Contatos",
    "path": "/ferramentas-do-atendimento/atendimento/contatos/restricao-de-acesso-a-contatos",
    "sourcePath": "/ferramentas-do-atendimento/atendimento/contatos/restricao-de-acesso-a-contatos",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Atendimento",
      "Contatos"
    ],
    "summary": "Restrição de Acesso a Contatos A partir da versão 3.1.4.5, foi implementada uma nova camada de segurança e privacidade para a gestão de dados de contato. Atendendo a conformidade (LGPD) e segurança da informação, agora é possível limitar o que um usuário específico pode ver e...",
    "headings": [
      "Como Ativar a Restrição",
      "Efeitos da Restrição",
      "Na Navegação Geral",
      "Na Tela de Atendimento (Chat)"
    ],
    "topics": [
      "O usuário não terá acesso ao menu \"Contatos\", impedinão a visualização ou exportação da lista completa de contatos.",
      "O botão \"Iniciar Conversa Avulsa\" na tela de Atendimentos será ocultado.",
      "Nome do Contato: Será exibido parcialmente (apenas os 5 primeiros caracteres).",
      "Foto do Perfil: Receberá um forte efeito de desfoque (blur).",
      "Dados Sensíveis: Todos os campos de detalhes do contato na barra lateral (como Telefone, E-mail, CPF, etc.) serão ocultados.",
      "Botão Editar Contato: O ícone de lápis para editar o contato será ocultado.",
      "Opções de Telefonia: Os botões de telefonia serão desabilitados.",
      "Ações de Mensagem: As opções \"Encaminhar\" e \"Marcar\" serão desabilitadas para impedir o vazamento de dados."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-contatos-restricao-de-acesso-a-contatos-01-afc1e9d460.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-contatos-restricao-de-acesso-a-contatos-02-da057fa01e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-contatos-restricao-de-acesso-a-contatos-03-5b9d9bb4ea.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-atendimento-contatos-restricao-de-acesso-a-contatos-04-c1ac285e8f.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Restrição de Acesso a Contatos A partir da versão 3.1.4.5, foi implementada uma nova camada de segurança e privacidade para a gestão de dados de contato. Atendendo a conformidade (LGPD) e segurança da informação, agora é possível limitar o que um usuário específico pode ver e..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-contatos-restricao-de-acesso-a-contatos-01-afc1e9d460.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-contatos-restricao-de-acesso-a-contatos-02-da057fa01e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-contatos-restricao-de-acesso-a-contatos-03-5b9d9bb4ea.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-atendimento-contatos-restricao-de-acesso-a-contatos-04-c1ac285e8f.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Como Ativar a Restrição",
          "Efeitos da Restrição",
          "Na Navegação Geral",
          "Na Tela de Atendimento (Chat)"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing",
    "title": "Comunicação e marketing",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing",
    "breadcrumbs": [
      "Ferramentas do atendimento"
    ],
    "summary": "Comunicação e marketing - Campanhas (Disparo em Massa): Campanhas de Envio - Envio em Massa: Envio de mensagens massivas - WhatsApp - Templates: Envio de mensagens massivas para API Oficial - WhatsApp - Sem Variáveis: Envio de mensagens massivas para API Não Oficial -...",
    "headings": [],
    "topics": [
      "Campanhas (Disparo em Massa): Campanhas de Envio",
      "Envio em Massa: Envio de mensagens massivas",
      "WhatsApp - Templates: Envio de mensagens massivas para API Oficial",
      "WhatsApp - Sem Variáveis: Envio de mensagens massivas para API Não Oficial",
      "WhatsApp - Com Variáveis: Envio de mensagens massivas para API Não Oficial",
      "SMS: Envio de mensagens massivas",
      "Galeria",
      "Gestão de grupos: Gestão de Grupos",
      "Grupos e Participantes: Gerar Grupos em Massa e Listar Participantes",
      "Manipular Grupos: Alterar Dados Dos Grupos Em Massa"
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Comunicação e marketing - Campanhas (Disparo em Massa): Campanhas de Envio - Envio em Massa: Envio de mensagens massivas - WhatsApp - Templates: Envio de mensagens massivas para API Oficial - WhatsApp - Sem Variáveis: Envio de mensagens massivas para API Não Oficial -..."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Campanhas (Disparo em Massa): Campanhas de Envio",
          "Envio em Massa: Envio de mensagens massivas",
          "WhatsApp - Templates: Envio de mensagens massivas para API Oficial",
          "WhatsApp - Sem Variáveis: Envio de mensagens massivas para API Não Oficial",
          "WhatsApp - Com Variáveis: Envio de mensagens massivas para API Não Oficial",
          "SMS: Envio de mensagens massivas",
          "Galeria",
          "Gestão de grupos: Gestão de Grupos"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa",
    "title": "Campanhas (Disparo em Massa)",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/campanhas-disparo-em-massa",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/campanhas-disparo-em-massa",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing"
    ],
    "summary": "Campanhas (Disparo em Massa) Disponível para o perfil: Administrador, Supervisor e Usuário Essa ferramenta te permite múltiplas possibilidades de abordagem. Aqui é possível fazer Disparos Programados de WhatsApp.",
    "headings": [
      "Criar Campanha",
      "Gerencie as Campanhas",
      "Lista de Contatos da Campanha",
      "Programar Envio",
      "Editar e Excluir"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-01-37096b5185.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-02-94eeeac7f9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-03-a93cf5d58d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-04-07d4865690.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-05-60ede5485e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-06-56e2920919.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-07-cd85d606d6.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-08-f95edb3770.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-09-c7d78dc2bd.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-10-3222b7d228.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-11-18ab51d756.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-12-8a3b579e3e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-13-4fedcc0b51.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-14-59e238ea84.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-15-533e3cb2af.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Campanhas (Disparo em Massa) Disponível para o perfil: Administrador, Supervisor e Usuário Essa ferramenta te permite múltiplas possibilidades de abordagem. Aqui é possível fazer Disparos Programados de WhatsApp."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-01-37096b5185.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-02-94eeeac7f9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-03-a93cf5d58d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-04-07d4865690.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-05-60ede5485e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-06-56e2920919.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-07-cd85d606d6.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-08-f95edb3770.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-09-c7d78dc2bd.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-10-3222b7d228.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-11-18ab51d756.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-12-8a3b579e3e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-13-4fedcc0b51.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-14-59e238ea84.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-campanhas-disparo-em-massa-15-533e3cb2af.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Criar Campanha",
          "Gerencie as Campanhas",
          "Lista de Contatos da Campanha",
          "Programar Envio",
          "Editar e Excluir"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa",
    "title": "Envio em Massa",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/envio-em-massa",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/envio-em-massa",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing"
    ],
    "summary": "Envio em Massa Disponível para o perfil: Administrador, Supervisor e Usuário O sistema oferece duas modalidades distintas: o disparo via API Oficial (WABA), que exige o uso de templates aprovados pela Meta, e o disparo via APIs não oficiais (conexão por QR Code), que...",
    "headings": [
      "Principais funções",
      "Caso de Uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Explicação dos campos e ícones",
      "Tutorial envio em massa",
      "Passo a passo de uso",
      "Detalhamento: Como obter IDs de Grupos",
      "Avisos e precauções",
      "Tutorial envio em massa para grupos"
    ],
    "topics": [
      "Envio de campanhas para listas de números via upload de CSV ou inserção manual.",
      "Disparos segmentados por Etiquetas (Tags), colunas do Kanbanãou Contatos selecionados.",
      "Envio programado para Grupos de WhatsApp através de IDs.",
      "Controle de intervalo entre mensagens para evitar bloqueios.",
      "Tempo de Disparo: Define o intervalo (em segundos) entre o envio de uma mensagem e outra.",
      "Números / IDs: Campo para inserir os destinatários manualmente ou via importação.",
      "Selecionar Template: (Apenas API Oficial) Lista os modelos de mensagens pré-aprovados pela Meta.",
      "Selecionar Etiqueta: Filtra contatos que possuem uma tag específica.",
      "Selecionar Kanban: Filtra contatos que possuem cards em uma coluna específica do quadro.",
      "Mídia: Espaço para anexar imagens, áudios (gravados ou arquivo) e documentos ao disparo."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-01-692f44ce6c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-02-1ced94ba1d.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Envio em Massa Disponível para o perfil: Administrador, Supervisor e Usuário O sistema oferece duas modalidades distintas: o disparo via API Oficial (WABA), que exige o uso de templates aprovados pela Meta, e o disparo via APIs não oficiais (conexão por QR Code), que..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-01-692f44ce6c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-02-1ced94ba1d.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de Uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Explicação dos campos e ícones",
          "Tutorial envio em massa",
          "Passo a passo de uso",
          "Detalhamento: Como obter IDs de Grupos"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-templ",
    "title": "WhatsApp - Templates",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/envio-em-massa/whatsapp-templates",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/envio-em-massa/whatsapp-templates",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing",
      "Envio em Massa"
    ],
    "summary": "WhatsApp - Templates Você verá a seguinte tela: Conheça os campos de preenchimento: Campo Descrição ------------------------------- ----------------------------------------------------------------------------------------- WhatsApp ID Caso tenha mais de um canal conectado,...",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-templ-01-c60f5d6dd2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-templ-02-11b378a62c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-templ-03-9c580a66c7.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "WhatsApp - Templates Você verá a seguinte tela: Conheça os campos de preenchimento: Campo Descrição ------------------------------- ----------------------------------------------------------------------------------------- WhatsApp ID Caso tenha mais de um canal conectado,..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-templ-01-c60f5d6dd2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-templ-02-11b378a62c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-templ-03-9c580a66c7.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-sem-v",
    "title": "WhatsApp - Sem Variáveis",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/envio-em-massa/whatsapp-sem-variaveis",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/envio-em-massa/whatsapp-sem-variaveis",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing",
      "Envio em Massa"
    ],
    "summary": "WhatsApp - Sem Variáveis Você verá a seguinte tela: Conheça os campos de preenchimento: Campo Descrição -------------------------------...",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-sem-v-01-e523053a58.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Grupos",
        "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/grupos-e-participantes"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "WhatsApp - Sem Variáveis Você verá a seguinte tela: Conheça os campos de preenchimento: Campo Descrição -------------------------------..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-sem-v-01-e523053a58.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-com-v",
    "title": "WhatsApp - Com Variáveis",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/envio-em-massa/whatsapp-com-variaveis",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/envio-em-massa/whatsapp-com-variaveis",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing",
      "Envio em Massa"
    ],
    "summary": "WhatsApp - Com Variáveis Você verá a seguinte tela: Para usar as variáveis você deverá incluí-las separadas por virgula no campo de preenchimento do números: 55119123456789,variavel1,variavel2,variavel3 Insira sua mensagem/descrição de mídia e use as variáveis entre chaves...",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-com-v-01-f9f518526e.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Grupos",
        "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/grupos-e-participantes"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "WhatsApp - Com Variáveis Você verá a seguinte tela: Para usar as variáveis você deverá incluí-las separadas por virgula no campo de preenchimento do números: 55119123456789,variavel1,variavel2,variavel3 Insira sua mensagem/descrição de mídia e use as variáveis entre chaves..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-whatsapp-com-v-01-f9f518526e.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-sms",
    "title": "SMS",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/envio-em-massa/sms",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/envio-em-massa/sms",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing",
      "Envio em Massa"
    ],
    "summary": "SMS Você verá a seguinte tela: Conheça os campos de preenchimento: Campo Descrição ------------------------------- ----------------------------------------------------------------------------------------- Mínimo (segundos) Escolha o mínimo de duração que esse disparo terá....",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-sms-01-af873325f3.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "SMS Você verá a seguinte tela: Conheça os campos de preenchimento: Campo Descrição ------------------------------- ----------------------------------------------------------------------------------------- Mínimo (segundos) Escolha o mínimo de duração que esse disparo terá...."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-envio-em-massa-sms-01-af873325f3.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-galeria",
    "title": "Galeria",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/galeria",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/galeria",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing"
    ],
    "summary": "Galeria A Galeria é um repositório centralizado de arquivos dentro do IGUITECH. Com ela, você pode deixar documentos, imagens e vídeos importantes salvos na nuvem do sistema, permitindo que qualquer atendente os envie rapidamente durante uma conversa, sem a necessidade de...",
    "headings": [
      "1. Gerenciando a Galeria (Upload de Arquivos)",
      "2. Enviando Arquivos da Galeria no Atendimento"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-galeria-01-4bcaf3340d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-galeria-02-760ec68be2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-galeria-03-b7e3654942.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-galeria-04-b3f9521e8a.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-galeria-05-83e7cc236e.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Galeria A Galeria é um repositório centralizado de arquivos dentro do IGUITECH. Com ela, você pode deixar documentos, imagens e vídeos importantes salvos na nuvem do sistema, permitindo que qualquer atendente os envie rapidamente durante uma conversa, sem a necessidade de..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-galeria-01-4bcaf3340d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-galeria-02-760ec68be2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-galeria-03-b7e3654942.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-galeria-04-b3f9521e8a.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-galeria-05-83e7cc236e.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "1. Gerenciando a Galeria (Upload de Arquivos)",
          "2. Enviando Arquivos da Galeria no Atendimento"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos",
    "title": "Gestão de grupos",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing"
    ],
    "summary": "Gestão de grupos Disponível para o perfil: Administrador, Supervisor e Usuário Para acessá-lo, clique no ícone de Grupos no menu lateral do seu painel. Você verá as seguintes opções na tela:",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-01-17a4706e96.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Gestão de grupos Disponível para o perfil: Administrador, Supervisor e Usuário Para acessá-lo, clique no ícone de Grupos no menu lateral do seu painel. Você verá as seguintes opções na tela:"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-01-17a4706e96.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par",
    "title": "Grupos e Participantes",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/grupos-e-participantes",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/grupos-e-participantes",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing",
      "Gestão de grupos"
    ],
    "summary": "Grupos e Participantes Ao clicar nessa opção, você verá a seguinte tela: Gerador de Grupos Clique no botão Criar Grupos em Massa, no canto esquerdo da tela. Assim que selecionar esse botão, um pop up se abrirá para que você preencha as inãormações.",
    "headings": [
      "Gerador de Grupos",
      "Listar Id de Grupos",
      "Listar Participantes"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-01-f312e02934.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-02-ed7acef741.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-03-3fae3c0aa9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-04-901b0bfabb.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-05-d092a7984a.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-06-4d2bd8952d.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Grupos e Participantes Ao clicar nessa opção, você verá a seguinte tela: Gerador de Grupos Clique no botão Criar Grupos em Massa, no canto esquerdo da tela. Assim que selecionar esse botão, um pop up se abrirá para que você preencha as inãormações."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-01-f312e02934.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-02-ed7acef741.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-03-3fae3c0aa9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-04-901b0bfabb.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-05-d092a7984a.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-grupos-e-par-06-4d2bd8952d.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Gerador de Grupos",
          "Listar Id de Grupos",
          "Listar Participantes"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-manipular-gr",
    "title": "Manipular Grupos",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/manipular-grupos",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/manipular-grupos",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing",
      "Gestão de grupos"
    ],
    "summary": "Manipular Grupos Ao clicar nessa opção, você verá a seguinte tela: Assim como na aba anterior, aqui você encontra os campos Conexão e Grupos. Selecione o canal desejado e o grupo que deseja manipular.",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-manipular-gr-01-7a3c393f26.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Manipular Grupos Ao clicar nessa opção, você verá a seguinte tela: Assim como na aba anterior, aqui você encontra os campos Conexão e Grupos. Selecione o canal desejado e o grupo que deseja manipular."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-manipular-gr-01-7a3c393f26.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": []
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-manipular-us",
    "title": "Manipular Usuários",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/manipular-usuarios",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/manipular-usuarios",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing",
      "Gestão de grupos"
    ],
    "summary": "Manipular Usuários Clicando nessa aba, você verá a seguinte tela: Aqui você também encontra os campos Conexão e Grupos. Novamente, selecione o canal desejado e o grupo que deseja.",
    "headings": [],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-manipular-us-01-1ca38d96af.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-manipular-us-02-76ad90d8d7.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Manipular Usuários Clicando nessa aba, você verá a seguinte tela: Aqui você também encontra os campos Conexão e Grupos. Novamente, selecione o canal desejado e o grupo que deseja."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-manipular-us-01-1ca38d96af.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-manipular-us-02-76ad90d8d7.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani",
    "title": "Números Banidos",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/numeros-banidos",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/numeros-banidos",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing",
      "Gestão de grupos"
    ],
    "summary": "Números Banidos Ao clicar nessa opção, você verá a seguinte tela: Aqui é onde você poderá criar uma lista de números que não serão adicionados em grupos ou receberão qualquer disparo efetuado pela sua plataforma. Assim, você evita que suas mensagens sejam denunciadas por...",
    "headings": [
      "Adicionar Número Banido",
      "Gerenciar Números Banidos"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-01-2a0f03f348.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-02-aefa40d283.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-03-b7dc59a7bb.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-04-ae9563bbb3.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-05-9c0b960776.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-06-3df63f81d8.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Números Banidos Ao clicar nessa opção, você verá a seguinte tela: Aqui é onde você poderá criar uma lista de números que não serão adicionados em grupos ou receberão qualquer disparo efetuado pela sua plataforma. Assim, você evita que suas mensagens sejam denunciadas por..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-01-2a0f03f348.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-02-aefa40d283.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-03-b7dc59a7bb.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-04-ae9563bbb3.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-05-9c0b960776.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-numeros-bani-06-3df63f81d8.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Adicionar Número Banido",
          "Gerenciar Números Banidos"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-palavras-pro",
    "title": "Palavras Proibidas",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/palavras-proibidas",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/palavras-proibidas",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing",
      "Gestão de grupos"
    ],
    "summary": "Palavras Proibidas Clicando nessa aba, você verá a seguinte tela: Adicionar Palavras Proibidas Clique em Adicionar no canto superior da tela. Assim que selecionar esse botão, um pop up se abrirá para que você preencha as inãormações.",
    "headings": [
      "Adicionar Palavras Proibidas",
      "Gerenciar Palavras Proibidas",
      "Ligar Vigia de Palavras"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-palavras-pro-01-a150086412.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-palavras-pro-03-88d367ed02.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-palavras-pro-05-14afb44449.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-palavras-pro-07-3c7eb3ea05.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-palavras-pro-08-281bed351c.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Palavras Proibidas Clicando nessa aba, você verá a seguinte tela: Adicionar Palavras Proibidas Clique em Adicionar no canto superior da tela. Assim que selecionar esse botão, um pop up se abrirá para que você preencha as inãormações."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-palavras-pro-01-a150086412.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-palavras-pro-03-88d367ed02.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-palavras-pro-05-14afb44449.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-palavras-pro-07-3c7eb3ea05.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-palavras-pro-08-281bed351c.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Adicionar Palavras Proibidas",
          "Gerenciar Palavras Proibidas",
          "Ligar Vigia de Palavras"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de-",
    "title": "Mensagem de Saudação",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/mensagem-de-saudacao",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/mensagem-de-saudacao",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing",
      "Gestão de grupos"
    ],
    "summary": "Mensagem de Saudação Ao clicar nessa opção, você verá a seguinte tela: Adicionar Saudação Clique em Adicionar no canto superior da tela. Assim que selecionar esse botão, um pop up se abrirá para que você preencha as inãormações.",
    "headings": [
      "Adicionar Saudação",
      "Gerenciar Saudações"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--01-d6db03810c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--01-ed2123d6d7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--03-5b57be9a36.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--03-d3db07a4b8.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--05-568130afd4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--05-f2b046e3fc.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Mensagem de Saudação Ao clicar nessa opção, você verá a seguinte tela: Adicionar Saudação Clique em Adicionar no canto superior da tela. Assim que selecionar esse botão, um pop up se abrirá para que você preencha as inãormações."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--01-d6db03810c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--01-ed2123d6d7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--03-5b57be9a36.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--03-d3db07a4b8.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--05-568130afd4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--05-f2b046e3fc.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Adicionar Saudação",
          "Gerenciar Saudações"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de-",
    "title": "Mensagem de Despedida",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/mensagem-de-despedida",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/gestao-de-grupos/mensagem-de-despedida",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing",
      "Gestão de grupos"
    ],
    "summary": "Mensagem de Despedida Ao clicar nessa opção, você verá a seguinte tela: Aqui você poderá criar uma lista com mensagens de despedida que serão adicionados aos grupos correspondentes. Adicionar Mensagem de Despedida Clique em Adicionar no canto superior da tela.",
    "headings": [
      "Adicionar Mensagem de Despedida",
      "Gerenciar Mensagens de Despedida"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--01-d6db03810c.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--01-ed2123d6d7.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--03-5b57be9a36.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--03-d3db07a4b8.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--05-568130afd4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--05-f2b046e3fc.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Mensagem de Despedida Ao clicar nessa opção, você verá a seguinte tela: Aqui você poderá criar uma lista com mensagens de despedida que serão adicionados aos grupos correspondentes. Adicionar Mensagem de Despedida Clique em Adicionar no canto superior da tela."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--01-d6db03810c.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--01-ed2123d6d7.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--03-5b57be9a36.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--03-d3db07a4b8.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--05-568130afd4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-gestao-de-grupos-mensagem-de--05-f2b046e3fc.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Adicionar Mensagem de Despedida",
          "Gerenciar Mensagens de Despedida"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas",
    "title": "Mensagens Rápidas",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/mensagens-rapidas",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/mensagens-rapidas",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing"
    ],
    "summary": "Mensagens Rápidas Disponível para o perfil: Administrador e Supervisor As mensagens rápidas são uma forma de agilizar o atendimento, através de textos predefinidos. Assim, é possível criar mensagens com diferentes propósitos, como: Boas vindas, Tabela de preços/serviços...",
    "headings": [
      "Nova Mensagem Rápida",
      "Gerenciar Mensagens Rápidas"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-01-3c82e22b8d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-02-194df849d2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-03-c5e343691a.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-04-fc8db0dc00.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-05-d491925e94.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-06-2b7afae303.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Mensagens Rápidas Disponível para o perfil: Administrador e Supervisor As mensagens rápidas são uma forma de agilizar o atendimento, através de textos predefinidos. Assim, é possível criar mensagens com diferentes propósitos, como: Boas vindas, Tabela de preços/serviços..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-01-3c82e22b8d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-02-194df849d2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-03-c5e343691a.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-04-fc8db0dc00.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-05-d491925e94.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-mensagens-rapidas-06-2b7afae303.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Nova Mensagem Rápida",
          "Gerenciar Mensagens Rápidas"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-comunicacao-e-marketing-redes-sociais-comentarios",
    "title": "Redes Sociais - Comentários",
    "path": "/ferramentas-do-atendimento/comunicacao-e-marketing/redes-sociais-comentarios",
    "sourcePath": "/ferramentas-do-atendimento/comunicacao-e-marketing/redes-sociais-comentarios",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Comunicação e marketing"
    ],
    "summary": "Redes Sociais - Comentários Disponível para o perfil: Administrador e usuário As páginas de gestão de comentários permitem centralizar a interação com o público das principais redes sociais (Instagram, Facebook, TikTok e YouTube) diretamente no painel IGUITECH. Através...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Passo a passo de uso",
      "Detalhamento",
      "Avisos e precauções"
    ],
    "topics": [
      "Centralização de Canais: Gestão de múltiplas redes sociais em uma única interface.",
      "Visualização de Mídia: Exibição da imagem ou vídeo da publicação selecionada para contexto.",
      "Interação em Tempo Real: Leitura e resposta de comentários de forma ágil.",
      "Conexão: Menu suspenso para selecionar a conta da rede social que está Conectada ao sistema.",
      "Botão Carregar publicações: Realiza a busca das postagens mais recentes da conta selecionada.",
      "Publicação: Lista as postagens encontradas para que o usuário escolha qual deseja monitorar.",
      "Buscar por ID da publicação: Campo para inserir manualmente o código identificador de uma postagem específica.",
      "Botão Buscar comentários: Carrega todos os comentários vinculados à publicação selecionada.",
      "Card de Visualização (Esquerda): Exibe a mídia da postagem (imagem/vídeo) e fornece um ícone de Link Externo para abrir a publicação original na rede social.",
      "Lista de Comentários (Direita): Exibe o nome do usuário (@), a data/hora do comentário e o texto enviado."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-redes-sociais-comentarios-01-0e226801e8.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-redes-sociais-comentarios-02-b19dae9efd.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-redes-sociais-comentarios-03-f27b63c5c0.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-redes-sociais-comentarios-04-c233ca4481.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "CANAIS",
        "path": "/configuracao-administrador/administracao-painel-admin/canais-de-comunicacao"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Redes Sociais - Comentários Disponível para o perfil: Administrador e usuário As páginas de gestão de comentários permitem centralizar a interação com o público das principais redes sociais (Instagram, Facebook, TikTok e YouTube) diretamente no painel IGUITECH. Através..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-redes-sociais-comentarios-01-0e226801e8.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-redes-sociais-comentarios-02-b19dae9efd.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-redes-sociais-comentarios-03-f27b63c5c0.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-comunicacao-e-marketing-redes-sociais-comentarios-04-c233ca4481.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Passo a passo de uso",
          "Detalhamento",
          "Avisos e precauções"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-gestao",
    "title": "Gestão",
    "path": "/ferramentas-do-atendimento/gestao",
    "sourcePath": "/ferramentas-do-atendimento/gestao",
    "breadcrumbs": [
      "Ferramentas do atendimento"
    ],
    "summary": "Gestão - Agenda - Funil de oportunidades: Gestão de Oportunidades - 1. Configurando seus Funis e Etapas - 2.",
    "headings": [],
    "topics": [
      "Agenda",
      "Funil de oportunidades: Gestão de Oportunidades",
      "1. Configurando seus Funis e Etapas",
      "2. Criando uma nova oportunidade",
      "3. Visualizando seus funis e oportunidades",
      "4. Automatizando seu Funil com Ações e Fluxos",
      "5. Ações em tickets (Follow-up Automático)",
      "Kanban de atendimento",
      "Tarefas: To Do List"
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Gestão - Agenda - Funil de oportunidades: Gestão de Oportunidades - 1. Configurando seus Funis e Etapas - 2."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Agenda",
          "Funil de oportunidades: Gestão de Oportunidades",
          "1. Configurando seus Funis e Etapas",
          "2. Criando uma nova oportunidade",
          "3. Visualizando seus funis e oportunidades",
          "4. Automatizando seu Funil com Ações e Fluxos",
          "5. Ações em tickets (Follow-up Automático)",
          "Kanban de atendimento"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-gestao-agenda",
    "title": "Agenda",
    "path": "/ferramentas-do-atendimento/gestao/agenda",
    "sourcePath": "/ferramentas-do-atendimento/gestao/agenda",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Gestão"
    ],
    "summary": "Agenda Agenda Disponível para o perfil: Administrador e Usuário A página Agenda é a ferramenta central de organização de compromissos e automação de notificações do sistema IGUITECH. Através dela, é possível realizar o agendamento de consultas, visualizar o cronograma em...",
    "headings": [
      "Principais funções",
      "Caso de uso",
      "Como acessar a página",
      "Você verá a seguinte tela:",
      "Detalhamento das Funcionalidades",
      "Funcionamento da Automação"
    ],
    "topics": [
      "Gestão de Consultas: Registro detalhado de compromissos com clientes.",
      "Visualização em Calendário: Painel mensal para controle visual de datas.",
      "Lembretes Automáticos: Configuração de disparos de mensagens com antecedência programada.",
      "Integração com Contatos: Vinculação direta com a base de dados do sistema.",
      "Botão + Nova Consulta: Abre o formulário para criar um novo agendamento.",
      "Título: Nome identificador do compromisso.",
      "Contato: Nome do cliente vinculado à consulta.",
      "Data/Hora: Momento exato do início do compromisso.",
      "Status: Indica a situação atual (ex: Pendente, Confirmado, Cancelado).",
      "Ações (Ícones):"
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-01-165b12315d.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-02-682f1e941b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-03-a3d2c8a902.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-04-c96b23ea96.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-05-397b7da1fb.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-06-f82cc00941.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Agenda Agenda Disponível para o perfil: Administrador e Usuário A página Agenda é a ferramenta central de organização de compromissos e automação de notificações do sistema IGUITECH. Através dela, é possível realizar o agendamento de consultas, visualizar o cronograma em..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-01-165b12315d.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-02-682f1e941b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-03-a3d2c8a902.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-04-c96b23ea96.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-05-397b7da1fb.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-agenda-06-f82cc00941.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Principais funções",
          "Caso de uso",
          "Como acessar a página",
          "Você verá a seguinte tela:",
          "Detalhamento das Funcionalidades",
          "Funcionamento da Automação"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-gestao-funil-de-oportunidades",
    "title": "Funil de oportunidades",
    "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades",
    "sourcePath": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Gestão"
    ],
    "summary": "Funil de oportunidades Disponível para o perfil: Administrador, Supervisor e Usuário A funcionalidade \"Funil de Oportunidades\" é uma ferramenta para gerenciar processos de negócio de forma visual e automatizada. Ela pode ser utilizada para diferentes fluxos, como um funil...",
    "headings": [
      "Vídeo Demonstrativo",
      "Documentação"
    ],
    "topics": [
      "1. Configurando seus Funis e Etapas O ponto de partida. Aprenda a criar a estrutura do seu processo, configurando os funis e as etapas (colunas) que servirão como base para sua operação.",
      "2. Como Criar uma Nova Oportunidade Com a estrutura pronta, o próximo passo é adicionar oportunidades ao funil. Esta documentação detalha as maneiras de criar uma nova oportunidade e explica cada campo do formulário.",
      "3. Visualizando e Gerenciando Oportunidades Aprenda a acompanhar o progresso utilizando as três telas de visualização: o Painel de Controle (visão analítica), o Kanban (fluxo de trabalho) e o Calendário (visão temporal).",
      "4. Automatizando seu Funil com Ações e Fluxos O guia avançado sobre automação. Aprenda a configurar Ações e Fluxos para que o sistema envie mensagens e mova oportunidades automaticamente, com base em regras de tempo.",
      "5.Ações em Tickets (Follow-up Automático) Como criar automações de follow-up (como enviar mensagens ou adicionar etiquetas) para reengajar clientes que não respondem a um ticket após um tempo determinado."
    ],
    "images": [],
    "links": [
      {
        "label": "1. Configurando seus Funis e Etapas",
        "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/1.-configurando-seus-funis-e-etapas"
      },
      {
        "label": "2. Como Criar uma Nova Oportunidade",
        "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/2.-criando-uma-nova-oportunidade"
      },
      {
        "label": "3. Visualizando e Gerenciando Oportunidades",
        "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/3.-visualizando-seus-funis-e-oportunidades"
      },
      {
        "label": "4. Automatizando seu Funil com Ações e Fluxos",
        "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/4.-automatizando-seu-funil-com-acoes-e-fluxos"
      },
      {
        "label": "5.Ações em Tickets (Follow-up Automático)",
        "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/5.-acoes-em-tickets-follow-up-automatico"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Funil de oportunidades Disponível para o perfil: Administrador, Supervisor e Usuário A funcionalidade \"Funil de Oportunidades\" é uma ferramenta para gerenciar processos de negócio de forma visual e automatizada. Ela pode ser utilizada para diferentes fluxos, como um funil..."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Vídeo Demonstrativo",
          "Documentação"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-gestao-funil-de-oportunidades-1-configurando-seus-fun",
    "title": "1. Configurando seus Funis e Etapas",
    "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/1.-configurando-seus-funis-e-etapas",
    "sourcePath": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/1.-configurando-seus-funis-e-etapas",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Gestão",
      "Funil de oportunidades"
    ],
    "summary": "1. Configurando seus Funis e Etapas Disponível para o perfil: Administrador, Supervisor e Usuário Esta documentação detalha o primeiro passo para utilizar o Funil de Oportunidades: a criação da sua estrutura de trabalho.",
    "headings": [
      "Passo 1: Acessando a Área de Configuração",
      "Passo 2: Criando um Novo Funil",
      "Passo 3: Adicionando Etapas ao Funil",
      "Passo 4: Gerenciando Funis e Etapas Existentes",
      "Próximo Passo"
    ],
    "topics": [
      "Editar: Clique no ícone de lápis para renomear um funil ou uma etapa.",
      "Excluir: Clique no ícone de lixeira para remover um funil"
    ],
    "images": [],
    "links": [
      {
        "label": "Criando uma nova oportunidade",
        "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/2.-criando-uma-nova-oportunidade"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "1. Configurando seus Funis e Etapas Disponível para o perfil: Administrador, Supervisor e Usuário Esta documentação detalha o primeiro passo para utilizar o Funil de Oportunidades: a criação da sua estrutura de trabalho."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Passo 1: Acessando a Área de Configuração",
          "Passo 2: Criando um Novo Funil",
          "Passo 3: Adicionando Etapas ao Funil",
          "Passo 4: Gerenciando Funis e Etapas Existentes",
          "Próximo Passo"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-gestao-funil-de-oportunidades-2-criando-uma-nova-opor",
    "title": "2. Criando uma nova oportunidade",
    "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/2.-criando-uma-nova-oportunidade",
    "sourcePath": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/2.-criando-uma-nova-oportunidade",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Gestão",
      "Funil de oportunidades"
    ],
    "summary": "2. Criando uma nova oportunidade Disponível para o perfil: Administrador, Supervisor e Usuário Esta documentação detalha as duas formas de criar uma nova oportunidade no IGUITECH, explica cada campo que precisa ser preenchido Existem duas maneiras de iniciar a...",
    "headings": [
      "Existem duas maneiras de iniciar a criação de uma oportunidade:",
      "Preenchendo os Dados da Oportunidade",
      "Criando um Evento Vinculado no Google Calendar (Opcional)",
      "Próximos Passos: Visualizando suas Oportunidades"
    ],
    "topics": [
      "Nome: Um título para identificar a oportunidade (ex: \"Projeto Site Novo - Empresa X\").",
      "Funil & Etapa: Selecione em qual funil e em qual etapa (coluna) esta oportunidade será criada.",
      "Responsável: Escolha o usuário/atendente que será o dono desta oportunidade.",
      "Contato: Atribua a oportunidade a um contato já existente na sua agenda.",
      "Previsão de fechamento: Defina uma data prevista para a conclusão.",
      "Valor: O valor monetário da negociação.",
      "Descrição: Um campo livre para detalhar a oportunidade.",
      "Status: Defina o status inicial como Aberto, Ganho ou Perdido.",
      "Selecionar agenda: Escolha a agenda do usuário onde o evento será criado.",
      "Título do evento: Puxa automaticamente o título da oportunidade."
    ],
    "images": [],
    "links": [
      {
        "label": "Visualizando suas Oportunidades",
        "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/3.-visualizando-seus-funis-e-oportunidades"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "2. Criando uma nova oportunidade Disponível para o perfil: Administrador, Supervisor e Usuário Esta documentação detalha as duas formas de criar uma nova oportunidade no IGUITECH, explica cada campo que precisa ser preenchido Existem duas maneiras de iniciar a..."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Existem duas maneiras de iniciar a criação de uma oportunidade:",
          "Preenchendo os Dados da Oportunidade",
          "Criando um Evento Vinculado no Google Calendar (Opcional)",
          "Próximos Passos: Visualizando suas Oportunidades"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-gestao-funil-de-oportunidades-3-visualizando-seus-fun",
    "title": "3. Visualizando seus funis e oportunidades",
    "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/3.-visualizando-seus-funis-e-oportunidades",
    "sourcePath": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/3.-visualizando-seus-funis-e-oportunidades",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Gestão",
      "Funil de oportunidades"
    ],
    "summary": "3. Visualizando seus funis e oportunidades Disponível para o perfil: Administrador, Supervisor e Usuário Após criar suas oportunidades, o IGUITECH oferece três telas distintas para visualizá-las e gerenciá-las.",
    "headings": [
      "1. Painel de Controle: A Visão Analítica",
      "2. Kanban: A Visão de Fluxo de Trabalho",
      "3. Calendário: A Visão Temporal",
      "Próximo Passo"
    ],
    "topics": [
      "Filtros: Permitem segmentar os dados por período de tempo, funil específico, etapa, status ou responsável.",
      "Cards de Resumo: Exibem os totais gerais, como o número de oportunidades abertas e o valor total em negociação.",
      "Gráficos: Mostram a distribuição visual das oportunidades por etapa do funil.",
      "Lista de Oportunidades: Uma tabela detalhada com todas as oportunidades que correspondem ao filtro aplicado.",
      "Kanban de Oportunidades (Esta Página): Utiliza as Etapas do Funil para organizar as oportunidades de negócio. É a ferramenta para a gestão de processos comerciais.",
      "Kanban de Atendimentos: Utiliza Etiquetas (Tags) para organizar visualmente os atendimentos em andamento. É ideal para a gestão operacional da equipe de suporte. Consulte a documentação aqui.",
      "Filtro para visualização",
      "Ação Principal: Arraste e solte (drag and drop) os cards de uma coluna para outra para atualizar o progresso de uma oportunidade de forma rápida e visual.",
      "Ações Adicionais: Dentro de um card, você pode visualizar as inãormações resumidas do contato e retomar o atendimento.",
      "Ação Principal: Clique em um dia específico no calendário para listar as oportunidades com vencimento naquela data ou para adicionar novas."
    ],
    "images": [],
    "links": [
      {
        "label": "Kanban de Atendimentos",
        "path": "/ferramentas-do-atendimento/gestao/kanban-de-atendimento"
      },
      {
        "label": "4. Automatizando seu Funil com Ações e Fluxos",
        "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/4.-automatizando-seu-funil-com-acoes-e-fluxos"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "3. Visualizando seus funis e oportunidades Disponível para o perfil: Administrador, Supervisor e Usuário Após criar suas oportunidades, o IGUITECH oferece três telas distintas para visualizá-las e gerenciá-las."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "1. Painel de Controle: A Visão Analítica",
          "2. Kanban: A Visão de Fluxo de Trabalho",
          "3. Calendário: A Visão Temporal",
          "Próximo Passo"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-gestao-funil-de-oportunidades-4-automatizando-seu-fun",
    "title": "4. Automatizando seu Funil com Ações e Fluxos",
    "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/4.-automatizando-seu-funil-com-acoes-e-fluxos",
    "sourcePath": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/4.-automatizando-seu-funil-com-acoes-e-fluxos",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Gestão",
      "Funil de oportunidades"
    ],
    "summary": "4. Automatizando seu Funil com Ações e Fluxos Disponível para o perfil: Administrador, Supervisor e Usuário Esta documentação detalha o uso da aba \"Ação\", a central de automação do Funil de Oportunidades.",
    "headings": [
      "Conceitos Fundamentais",
      "A Tela de \"Ações\": Visão Geral",
      "Opção 1: Criando uma Ação Individual (+ NOVO)",
      "Opção 2: Criando um Fluxo com Múltiplas Ações",
      "Verificanto os Logs de Execução",
      "Exemplos Práticos",
      "Exemplo 1: Mudar o Status para \"Perdido\" (Ação Individual)",
      "Exemplo 2: Criar uma Cadência de Follow-up (Fluxo de Ações)"
    ],
    "topics": [
      "A Regra da \"Mudança de Etapa\"",
      "Ao configurar múltiplas ações para o mesmo dia, a ação de \"Mudar de Etapa\" deve ser sempre a última a ser executada.",
      "Botões Principais:",
      "+ NOVO: Para adicionar uma Ação individual e pontual.",
      "Novo Fluxo: Para criar um agrupador que conterá uma sequência de ações.",
      "Ver Logs: Para visualizar o histórico de todas as ações executadas.",
      "Filtros: Permitem pesquisar uma ação pelo nome ou filtrar a lista por funil, etapa ou tipo de ação.",
      "Lista de Ações e Fluxos: Uma tabela com todas as automações criadas, exibindo as colunas: Nome, Funil, Etapa, Tipo de Ação, Dias para Disparar, Conexão, Ativo e os botões para Editar ou Excluir.",
      "Dica: Na coluna \"Tipo de Ação\", o item será identificado como \"Fluxo\" se for um agrupador, ou pelo tipo específico (ex: \"Enviar Mensagem\") se for uma ação individual.",
      "Nome: Um nome para identificar esta ação (ex: \"Enviar mensagem de boas-vindas\")."
    ],
    "images": [],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "4. Automatizando seu Funil com Ações e Fluxos Disponível para o perfil: Administrador, Supervisor e Usuário Esta documentação detalha o uso da aba \"Ação\", a central de automação do Funil de Oportunidades."
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Conceitos Fundamentais",
          "A Tela de \"Ações\": Visão Geral",
          "Opção 1: Criando uma Ação Individual (+ NOVO)",
          "Opção 2: Criando um Fluxo com Múltiplas Ações",
          "Verificanto os Logs de Execução",
          "Exemplos Práticos",
          "Exemplo 1: Mudar o Status para \"Perdido\" (Ação Individual)",
          "Exemplo 2: Criar uma Cadência de Follow-up (Fluxo de Ações)"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll",
    "title": "5. Ações em tickets (Follow-up Automático)",
    "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/5.-acoes-em-tickets-follow-up-automatico",
    "sourcePath": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/5.-acoes-em-tickets-follow-up-automatico",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Gestão",
      "Funil de oportunidades"
    ],
    "summary": "5. Ações em tickets (Follow-up Automático) A funcionalidade \"Ações em Tickets\" (disponível a partir da v3.1.4.5) permite criar automações de follow-up para reengajar clientes.",
    "headings": [
      "Como Configurar",
      "Preenchendo os Campos da Ação",
      "Tipos de Ações Disponíveis",
      "1. Enviar Mensagem",
      "2. Adicionar Etiqueta",
      "3. Adicionar Carteira"
    ],
    "topics": [
      "Nome da ação: Um nome para sua identificação (ex: \"Follow-up 24h\", \"Mover para Perdido 48h\").",
      "Tempo (em horas): O número de horas que o sistema deve aguardar pela resposta do cliente antes de disparar a ação.",
      "Tipo de ação: O que deve acontecer após o tempo de espera ser atingido.",
      "Descrição: Detalhamento da ação.",
      "Como usar: Selecione a \"Ação\" como \"Enviar Mensagem\". Escreva o texto no campo \"Mensagem\" e e scolha a \"conexão\" (canal) por onde a mensagem deve ser enviada.",
      "Caso de Uso: Perfeito para reengajar um cliente com uma mensagem de follow-up (ex: \"Olá! Conseguiu verificar a proposta que enviei?\").",
      "Como usar: Selecione a \"Ação\" como \"Adicionar Etiqueta\" e, em seguida, escolha a \"Etiqueta\" desejada no campo que aparecerá.",
      "Caso de Uso: Útil para classificar clientes inativos. Por exemplo, se um cliente não responde em 72 horas, o sistema pode adicionar automaticamente a etiqueta \"Cliente Frio\".",
      "Como usar: Selecione a \"Ação\" como \"Adicionar Carteira\" e, em seguida, escolha o \"Usuário\" (atendente) que se tornará o dono desse contato.",
      "Caso de Uso: Se um lead de prospecção não responde ao atendente atual, a ação pode movê-lo automaticamente para a carteira de um gerente ou de um especialista em recuperação."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-01-c3137d671e.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-02-0da82e61dd.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-03-2b56b27383.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-04-a8157b3e36.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-05-03fe512647.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-06-050d4c3de9.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "5. Ações em tickets (Follow-up Automático) A funcionalidade \"Ações em Tickets\" (disponível a partir da v3.1.4.5) permite criar automações de follow-up para reengajar clientes."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-01-c3137d671e.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-02-0da82e61dd.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-03-2b56b27383.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-04-a8157b3e36.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-05-03fe512647.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-funil-de-oportunidades-5-acoes-em-tickets-foll-06-050d4c3de9.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Como Configurar",
          "Preenchendo os Campos da Ação",
          "Tipos de Ações Disponíveis",
          "1. Enviar Mensagem",
          "2. Adicionar Etiqueta",
          "3. Adicionar Carteira"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-gestao-kanban-de-atendimento",
    "title": "Kanban de atendimento",
    "path": "/ferramentas-do-atendimento/gestao/kanban-de-atendimento",
    "sourcePath": "/ferramentas-do-atendimento/gestao/kanban-de-atendimento",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Gestão"
    ],
    "summary": "Kanban de atendimento Disponível para o perfil: Administrador, Supervisor e Usuário O Kanban é uma ferramenta que você pode utilizar para ter um melhor Controle Visual de Atendimentos. O kanbans são totalmente personalizáveis, sendo assim, você pode criar quantos forem...",
    "headings": [
      "Aba Kanban",
      "Aba Etiquetas"
    ],
    "topics": [
      "Kanban de Atendimentos (Esta Página): Utiliza Etiquetas (Tags) para organizar visualmente os atendimentos em andamento. É ideal para a gestão operacional da equipe de suporte.",
      "Kanban de Oportunidades: Utiliza as Etapas do Funil para organizar as oportunidades de negócio. É a ferramenta para a gestão de processos comerciais. Consulte a documentação aqui."
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-kanban-de-atendimento-01-c880ec6ecd.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-kanban-de-atendimento-02-f4e42014f2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-kanban-de-atendimento-03-2389421478.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-kanban-de-atendimento-04-8861e1def6.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-kanban-de-atendimento-05-0a7a890b40.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [
      {
        "label": "Kanban de Oportunidades:",
        "path": "/ferramentas-do-atendimento/gestao/funil-de-oportunidades/3.-visualizando-seus-funis-e-oportunidades"
      },
      {
        "label": "Configurações",
        "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/crm/gerenciar-kanban"
      },
      {
        "label": "Configurações",
        "path": "/configuracao-administrador/configuracao/configuracoes-gerais-admin/crm/gerenciar-kanban"
      },
      {
        "label": "Atendimento",
        "path": "/ferramentas-do-atendimento/atendimento/tela-de-atendimento"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Kanban de atendimento Disponível para o perfil: Administrador, Supervisor e Usuário O Kanban é uma ferramenta que você pode utilizar para ter um melhor Controle Visual de Atendimentos. O kanbans são totalmente personalizáveis, sendo assim, você pode criar quantos forem..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-kanban-de-atendimento-01-c880ec6ecd.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-kanban-de-atendimento-02-f4e42014f2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-kanban-de-atendimento-03-2389421478.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-kanban-de-atendimento-04-8861e1def6.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-kanban-de-atendimento-05-0a7a890b40.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Aba Kanban",
          "Aba Etiquetas"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-gestao-tarefas",
    "title": "Tarefas",
    "path": "/ferramentas-do-atendimento/gestao/tarefas",
    "sourcePath": "/ferramentas-do-atendimento/gestao/tarefas",
    "breadcrumbs": [
      "Ferramentas do atendimento",
      "Gestão"
    ],
    "summary": "Tarefas Disponível para o perfil: Administrador, Supervisor e Usuário As tarefas são uma forma de organizar o dia a dia dos colaboradores. Assim, é possível que eles criem uma rotina de atividades, categorizando-as por prioridade, data limite de realização, usuário...",
    "headings": [
      "Adicionar Tarefa",
      "Gerenciar Tarefas"
    ],
    "topics": [],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-01-d18bcd3bfd.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-02-48e129d99b.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-03-2192eb6dc5.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-04-2a77ec81d9.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-05-b435f896fe.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-06-08a5d9f256.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-07-0efea95ba1.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-08-d2e7bfd6a4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-09-97b6e383fc.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-10-39d07529d3.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-11-65c5cd8cea.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Tarefas Disponível para o perfil: Administrador, Supervisor e Usuário As tarefas são uma forma de organizar o dia a dia dos colaboradores. Assim, é possível que eles criem uma rotina de atividades, categorizando-as por prioridade, data limite de realização, usuário..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-01-d18bcd3bfd.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-02-48e129d99b.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-03-2192eb6dc5.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-04-2a77ec81d9.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-05-b435f896fe.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-06-08a5d9f256.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-07-0efea95ba1.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-08-d2e7bfd6a4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-09-97b6e383fc.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-10-39d07529d3.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-gestao-tarefas-11-65c5cd8cea.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Adicionar Tarefa",
          "Gerenciar Tarefas"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-do-atendimento-conta-meu-perfil",
    "title": "Conta - Meu perfil",
    "path": "/ferramentas-do-atendimento/conta-meu-perfil",
    "sourcePath": "/ferramentas-do-atendimento/conta-meu-perfil",
    "breadcrumbs": [
      "Ferramentas do atendimento"
    ],
    "summary": "Conta - Meu perfil Gerencie suas inãormações pessoais, foto de perfil e senha de acesso ao sistema. Atualizando o perfil Edite seu nome, e-mail e telefone na seção Meu Perfil Clique na foto para atualizar sua imagem de perfil (máximo 5MB) Clique em Salvar perfil para...",
    "headings": [
      "Atualizando o perfil",
      "Alterando a senha"
    ],
    "topics": [
      "Edite seu nome, e-mail e telefone na seção Meu Perfil",
      "Clique na foto para atualizar sua imagem de perfil (máximo 5MB)",
      "Clique em Salvar perfil para confirmar as alterações",
      "Informe a senha atual e a nova senha com no mínimo 6 caracteres",
      "Confirme a nova senha e clique em Alterar senha"
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-do-atendimento-conta-meu-perfil-01-be392f27b3.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-do-atendimento-conta-meu-perfil-02-5894509e61.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Conta - Meu perfil Gerencie suas inãormações pessoais, foto de perfil e senha de acesso ao sistema. Atualizando o perfil Edite seu nome, e-mail e telefone na seção Meu Perfil Clique na foto para atualizar sua imagem de perfil (máximo 5MB) Clique em Salvar perfil para..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-do-atendimento-conta-meu-perfil-01-be392f27b3.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-do-atendimento-conta-meu-perfil-02-5894509e61.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Atualizando o perfil",
          "Alterando a senha"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-adicionais-e-integracoes-visao-geral-ferramentas-adicionais-e-integr",
    "title": "Visão geral - Ferramentas Adicionais e Integrações",
    "path": "/ferramentas-adicionais-e-integracoes/visao-geral-ferramentas-adicionais-e-integracoes",
    "sourcePath": "/ferramentas-adicionais-e-integracoes/visao-geral-ferramentas-adicionais-e-integracoes",
    "breadcrumbs": [
      "Ferramentas Adicionais e Integrações"
    ],
    "summary": "Visão geral - Ferramentas Adicionais e Integrações Esta seção agrupa um conjunto de ferramentas e funcionalidades que expandem as capacidades do IGUITECH para além do atendimento convencional por texto. Aqui você encontrará canais de comunicação alternativos como a telefonia...",
    "headings": [],
    "topics": [],
    "images": [],
    "links": [
      {
        "label": "Notificações do Aplicativo (Web Push)",
        "path": "/ferramentas-adicionais-e-integracoes/notificacoes-aplicativo-web-push"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Visão geral - Ferramentas Adicionais e Integrações Esta seção agrupa um conjunto de ferramentas e funcionalidades que expandem as capacidades do IGUITECH para além do atendimento convencional por texto. Aqui você encontrará canais de comunicação alternativos como a telefonia..."
      }
    ]
  },
  {
    "id": "ferramentas-adicionais-e-integracoes-ligacoes-no-iguitech-telefonia-e-voz",
    "title": "Ligações no IGUITECH (Telefonia e Voz)",
    "path": "/ferramentas-adicionais-e-integracoes/ligacoes-no-IGUITECH-telefonia-e-voz",
    "sourcePath": "/ferramentas-adicionais-e-integracoes/ligacoes-no-IGUITECH-telefonia-e-voz",
    "breadcrumbs": [
      "Ferramentas Adicionais e Integrações"
    ],
    "summary": "Ligações no IGUITECH (Telefonia e Voz) Introdução A plataforma IGUITECH permite integrar canais de voz para que sua equipe possa realizar e receber chamadas diretamente pela interface. É importante entender que o IGUITECH funciona como um centralizador destas operações, mas...",
    "headings": [
      "Introdução",
      "1. Ligações via WhatsApp (Wavoip)",
      "Login",
      "2. Ligações Convencionais (Telefonia SIP)",
      "Pré-requisitos Obrigatórios",
      "Como Configurar"
    ],
    "topics": [
      "Como Funciona: A funcionalidade é viabilizada através de uma integração com o serviço Wavoip. Você precisa ter uma conta ativa com eles para que o IGUITECH possa se conectar.",
      "Configuração: As credenciais da sua conta Wavoip devem ser inseridas nas configurações do seu canal Baileys dentro do IGUITECH.",
      "Vídeo Tutorial: Assista ao passo a passo completo de como realizar a integração:",
      "✅ WebRTC",
      "✅ WSS (Web Socket Secure), geralmente operando na porta 8089.",
      "Usuário SIP",
      "Senha SIP",
      "Servidor SIP",
      "Porta WSS (ex: 8089)"
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-adicionais-e-integracoes-ligacoes-no-iguitech-telefonia-e-voz-01-2344cc2bb2.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-adicionais-e-integracoes-ligacoes-no-iguitech-telefonia-e-voz-02-71f48f32c6.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-adicionais-e-integracoes-ligacoes-no-iguitech-telefonia-e-voz-03-af6554aeec.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-adicionais-e-integracoes-ligacoes-no-iguitech-telefonia-e-voz-04-58cd369362.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-adicionais-e-integracoes-ligacoes-no-iguitech-telefonia-e-voz-05-aa9f110020.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Ligações no IGUITECH (Telefonia e Voz) Introdução A plataforma IGUITECH permite integrar canais de voz para que sua equipe possa realizar e receber chamadas diretamente pela interface. É importante entender que o IGUITECH funciona como um centralizador destas operações, mas..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-adicionais-e-integracoes-ligacoes-no-iguitech-telefonia-e-voz-01-2344cc2bb2.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-adicionais-e-integracoes-ligacoes-no-iguitech-telefonia-e-voz-02-71f48f32c6.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-adicionais-e-integracoes-ligacoes-no-iguitech-telefonia-e-voz-03-af6554aeec.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-adicionais-e-integracoes-ligacoes-no-iguitech-telefonia-e-voz-04-58cd369362.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-adicionais-e-integracoes-ligacoes-no-iguitech-telefonia-e-voz-05-aa9f110020.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "Introdução",
          "1. Ligações via WhatsApp (Wavoip)",
          "Login",
          "2. Ligações Convencionais (Telefonia SIP)",
          "Pré-requisitos Obrigatórios",
          "Como Configurar"
        ]
      }
    ]
  },
  {
    "id": "ferramentas-adicionais-e-integracoes-notificacoes-aplicativo-web-push",
    "title": "Notificações Aplicativo (web push)",
    "path": "/ferramentas-adicionais-e-integracoes/notificacoes-aplicativo-web-push",
    "sourcePath": "/ferramentas-adicionais-e-integracoes/notificacoes-aplicativo-web-push",
    "breadcrumbs": [
      "Ferramentas Adicionais e Integrações"
    ],
    "summary": "Notificações Aplicativo (web push) Disponível para o perfil: Administrador Esta documentação explica como ativar as notificações de novas mensagens no seu celular através da tecnologia Web Push. O IGUITECH não é um aplicativo nativo que você baixa em uma loja (App Store...",
    "headings": [
      "2. Passo a Passo para Ativar as Notificações",
      "Etapa 1: Ative as Notificações no Aplicativo PWA",
      "Etapa 2: Habilite o Web Push no Canal Desejado",
      "Etapa 3: Permita as Notificações no seu Celular"
    ],
    "topics": [
      "Localize e acione o botão de notificação (geralmente um ícone de sino).",
      "Importante: Este botão só é visível quanto o IGUITECH é executado a partir do atalho na tela inicial (PWA).",
      "No painel do IGUITECH, acesse Canais.",
      "Edite o canal para o qual deseja receber notificações.",
      "Marque a opção \"Habilitar WebPush\" e salve as alterações.",
      "Não estou recebendo as notificações. O que verificar?"
    ],
    "images": [
      {
        "src": "assets/article-images/ferramentas-adicionais-e-integracoes-notificacoes-aplicativo-web-push-01-5a471a2f47.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-adicionais-e-integracoes-notificacoes-aplicativo-web-push-02-3c7fc62fe4.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-adicionais-e-integracoes-notificacoes-aplicativo-web-push-03-161bc1a72f.png",
        "alt": "Imagem ilustrativa do artigo"
      },
      {
        "src": "assets/article-images/ferramentas-adicionais-e-integracoes-notificacoes-aplicativo-web-push-04-246ddff643.png",
        "alt": "Imagem ilustrativa do artigo"
      }
    ],
    "links": [],
    "content": [
      {
        "type": "paragraph",
        "text": "Notificações Aplicativo (web push) Disponível para o perfil: Administrador Esta documentação explica como ativar as notificações de novas mensagens no seu celular através da tecnologia Web Push. O IGUITECH não é um aplicativo nativo que você baixa em uma loja (App Store..."
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "assets/article-images/ferramentas-adicionais-e-integracoes-notificacoes-aplicativo-web-push-01-5a471a2f47.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-adicionais-e-integracoes-notificacoes-aplicativo-web-push-02-3c7fc62fe4.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-adicionais-e-integracoes-notificacoes-aplicativo-web-push-03-161bc1a72f.png",
            "alt": "Imagem ilustrativa do artigo"
          },
          {
            "src": "assets/article-images/ferramentas-adicionais-e-integracoes-notificacoes-aplicativo-web-push-04-246ddff643.png",
            "alt": "Imagem ilustrativa do artigo"
          }
        ]
      },
      {
        "type": "heading",
        "text": "Principais tópicos"
      },
      {
        "type": "list",
        "items": [
          "2. Passo a Passo para Ativar as Notificações",
          "Etapa 1: Ative as Notificações no Aplicativo PWA",
          "Etapa 2: Habilite o Web Push no Canal Desejado",
          "Etapa 3: Permita as Notificações no seu Celular"
        ]
      }
    ]
  }
];
