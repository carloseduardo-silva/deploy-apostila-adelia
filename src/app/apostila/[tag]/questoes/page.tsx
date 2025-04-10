import React from 'react';

import QuestoesView from '@/app/Views/QuestoesView';

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const  tag  = "POO5"


  const apostilaData = {
    "video_transcript": null,
    "createdAt": "2025-03-17T13:01:20.691Z",
    "updatedAt": "2025-03-20T18:02:53.074Z",
    "publishedAt": "2025-03-17T13:01:20.620Z",
    "unit_name": "Unidade 5 - Classes Abstratas e Concretas",
    "learning_objectives": "<p>Nesta unidade, o aluno compreenderá os conceitos de <strong>classes abstratas e concretas</strong> na Programação Orientada a Objetos, entendendo como as classes abstratas servem de modelo para as classes derivadas. O conteúdo aborda a definição de métodos abstratos, o uso da palavra-chave <code>abstract</code> e a implementação de métodos concretos, relacionando tais conceitos com a melhoria da manutenibilidade e extensibilidade de sistemas, aspectos valorizados no mercado de trabalho.</p>",
    "specific_objectives": "<ul><li>Definir os conceitos de classes abstratas e concretas.</li><li>Diferenciar métodos implementados e métodos abstratos.</li><li>Implementar classes abstratas e concretas em Java, utilizando exemplos práticos.</li><li>Utilizar a anotação <code>@Override</code> para sobrescrever métodos nas subclasses.</li><li>Aplicar os conceitos para resolver problemas reais de organização e reutilização de código.</li></ul>",
    "audio_script": null,
    "tag": "POO5",
    "course": {
        "data": {
            "id": 1,
            "attributes": {
                "Nome": "Curso Técnico em Informática",
                "createdAt": "2025-01-29T01:17:19.170Z",
                "updatedAt": "2025-01-29T13:23:36.287Z",
                "publishedAt": "2025-01-29T13:23:36.284Z"
            }
        }
    },
    "subject": {
        "data": {
            "id": 1,
            "attributes": {
                "Nome": "Programação Orientada a Objetos",
                "createdAt": "2025-01-29T01:17:31.469Z",
                "updatedAt": "2025-01-29T13:23:40.623Z",
                "publishedAt": "2025-01-29T13:23:40.621Z"
            }
        }
    },
    "content_blocks": [
        {
            "id": 110,
            "body_text": "<p>Em Programação Orientada a Objetos, <strong>classes abstratas</strong> são definidas para servir como base para outras classes, pois estabelecem um modelo comum sem permitir a criação de objetos diretos. Por outro lado, <strong>classes concretas</strong> implementam completamente os métodos, possibilitando a instanciação. Esse conceito é importante para garantir que todas as classes derivadas sigam um comportamento padrão, prática amplamente utilizada em sistemas corporativos para manter a consistência e a organização do código.</p><p>No mercado de trabalho, essa abordagem facilita a manutenção e a evolução dos sistemas, pois alterações na classe abstrata propagam-se para todas as classes concretas que dela dependem.</p><p>Considerando o exemplo dos produtos e brinquedos, pode-se criar uma classe abstrata <code>Produto</code> que define atributos comuns, como <code>nome</code> e <code>preco</code>, e métodos que serão implementados de forma específica pelas classes derivadas. Dessa forma, garante-se que as classes concretas, como <code>Brinquedo</code> e <code>Bola</code>, tenham comportamentos personalizados, mantendo a consistência no gerenciamento dos produtos.</p>",
            "title": "Introdução a Classes Abstratas e Concretas",
            "type": "Texto"
        },
        {
            "id": 112,
            "body_text": "<p>public abstract class Produto {</p><p>    public String nome;</p><p>    public float preco;</p><p>    </p><p>    public void incluir(String nome, float preco) {</p><p>        this.nome = nome;</p><p>        this.preco = preco;</p><p>    }</p><p>    </p><p>    public void alterar() {</p><p>        System.out.println(\"Alterando produto\");</p><p>    }</p><p>    </p><p>    public void excluir() {</p><p>        System.out.println(\"Excluindo produto\");</p><p>    }</p><p>    </p><p>    public abstract void atualizar();</p><p>}</p><p> </p><p>public class Brinquedo extends Produto {</p><p>    @Override</p><p>    public void atualizar() {</p><p>        System.out.println(\"Atualizando Brinquedo\");</p><p>    }</p><p>}</p><p> </p><p>public class Bola extends Produto {</p><p>    @Override</p><p>    public void atualizar() {</p><p>        System.out.println(\"Atualizando Bola\");</p><p>    }</p><p>}",
            "title": "Codigo Exemplo: Classe Produto Abstrata e Implementação",
            "type": "Codigo"
        },
        {
            "id": 113,
            "body_text": "<p>// A seguir, um exemplo de classe de teste que instancia objetos das classes concretas e executa seus métodos:</p><p>public class UsaProduto {</p><p>public static void main(String[] args) {</p><p>Brinquedo brinquedo1 = new Brinquedo();</p><p>brinquedo1.incluir(\"Carrinho\", 150.75f);</p><p>brinquedo1.alterar();</p><p>brinquedo1.excluir();</p><p>brinquedo1.atualizar();</p><p>&nbsp;</p><p>Bola bola1 = new Bola();</p><p>bola1.incluir(\"Bola de Futebol\", 89.99f);</p><p>bola1.alterar();</p><p>bola1.excluir();</p><p>bola1.atualizar();</p><p>}</p><p>}</p>",
            "title": "Execucão e Teste das Classes",
            "type": "Codigo"
        },
        {
            "id": 114,
            "body_text": "<ul><li><strong>Reutilização e Organização</strong>: Utilizar classes abstratas permite centralizar a definição de atributos e comportamentos comuns, facilitando a manutenção e a evolução do código.</li><li><strong>Padrão e Consistência</strong>: Ao definir um comportamento padrão na classe abstrata, todas as classes derivadas seguem o mesmo contrato, o que é crucial em sistemas corporativos.</li><li><strong>Integração com Interfaces</strong>: Em projetos mais complexos, a combinação de classes abstratas e interfaces pode aumentar a flexibilidade, permitindo que comportamentos padrão e específicos sejam implementados simultaneamente.</li><li><strong>Segurança no Código</strong>: A utilização de anotações como @Override ajuda a prevenir erros, garantindo que os métodos abstratos sejam implementados conforme o esperado.</li></ul>",
            "title": "Conceitos Avançados e Boas Práticas",
            "type": "Texto"
        },
        {
            "id": 116,
            "body_text": "<p>public abstract class Produto {</p><p>    public String nome;</p><p>    public float preco;</p><p>    </p><p>    public void incluir(String nome, float preco) {</p><p>        this.nome = nome;</p><p>        this.preco = preco;</p><p>    }</p><p>    </p><p>    public void alterar() {</p><p>        System.out.println(\"Alterando produto\");</p><p>    }</p><p>    </p><p>    public void excluir() {</p><p>        System.out.println(\"Excluindo produto\");</p><p>    }</p><p>    </p><p>    public abstract void atualizar();</p><p>}</p><p> </p><p>public class Brinquedo extends Produto {</p><p>    @Override</p><p>    public void atualizar() {</p><p>        System.out.println(\"Atualizando Brinquedo\");</p><p>    }</p><p>}",
            "title": "Aplicação da classe abstrata",
            "type": "Codigo"
        }
    ],
    "mind_map": {
        "data": null
    },
    "additional_content": [
        {
            "id": 72,
            "body_text": "<p>https://www.youtube.com/embed/I2oz0puA6PE?si=vPjSshgRHPIRuny2</p>",
            "title": "Vídeo: Classes Abstratas e Concretas na Prática",
            "type": "Video"
        }
    ],
    "reflective_questions": [
        {
            "id": 6,
            "body_text": "<p>1. Quais as vantagens de utilizar classes abstratas para definir comportamentos padrão em um sistema orientado a objetos? Explique com base em um exemplo prático.</p>"
        },
        {
            "id": 19,
            "body_text": "<p>2. Como a implementação de classes concretas a partir de uma classe abstrata pode contribuir para a manutenibilidade e escalabilidade de um software?</p>"
        }
    ],
    "summary": [
        {
            "id": 5,
            "title": "Resumo Geral da Unidade",
            "body_text": "<p><strong>Objetivo:</strong> Apresentar os conceitos de classes abstratas e concretas na programação orientada a objetos.<br><strong>Benefícios: </strong>Reutilização do código, padronização e facilidade de manutenção.<br><strong>Aplicação: </strong>Uso de classes abstratas para definir modelos e classes concretas para instanciar objetos com comportamentos específicos.</p>"
        },
        {
            "id": 18,
            "title": "Classes Abstratas",
            "body_text": "<p>Não podem ser instanciadas; definem métodos e atributos comuns que as classes derivadas devem seguir.</p>"
        },
        {
            "id": 19,
            "title": "Classes Concretas",
            "body_text": "<p>Possuem implementações completas de todos os métodos, permitindo a criação de objetos.</p>"
        },
        {
            "id": 20,
            "title": "Exemplos Práticos",
            "body_text": "<ul><li><strong>Código da Classe Produto</strong>: Demonstra a criação de uma classe abstrata com métodos comuns (incluir, alterar, excluir) e um método abstrato (atualizar).</li><li><strong>Implementação em Brinquedo e Bola</strong>: Cada classe concreta sobrescreve o método atualizar() para fornecer uma implementação específica.</li><li><strong>Teste com UsaProduto</strong>: Exemplo de instanciamento e execução dos métodos, evidenciando o fluxo de um sistema orientado a objetos.<br>&nbsp;</li></ul>"
        },
        {
            "id": 21,
            "title": "Conceitos Avançados",
            "body_text": "<ul><li><strong>Reutilização e Padrão</strong>: Centralização de comportamentos em classes abstratas e propagação automática para subclasses.</li><li><strong>Manutenção e Escalabilidade</strong>: Facilita alterações e expansões no sistema, pois mudanças na classe abstrata impactam todas as classes derivadas.</li><li><strong>Boas Práticas</strong>: Uso de anotações como @Override para assegurar a implementação correta dos métodos herdados e evitar erros.<br>&nbsp;</li></ul>"
        }
    ]
}

  return <QuestoesView apostila={apostilaData} tag={tag} />;
}
