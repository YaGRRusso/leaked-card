import { createFileRoute } from "@tanstack/react-router"

import { CommonHero } from "@/components/common/hero"

export const Route = createFileRoute("/_layout/result")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4">
      <CommonHero
        title="Ainda bem que isso foi só um <strong>teste!</strong> Mas poderia ter sido real..."
        description="Golpistas usam sites como este todos os dias para roubar dinheiro de pessoas inocentes. Mas agora você aprendeu como evitar esse tipo de fraude!"
      />

      <div>
        "Você viu como era fácil acreditar que este site era seguro? Esse é o truque dos criminosos: criar páginas
        falsas que parecem legítimas para enganar pessoas."
        <br />
        "Nunca preencha informações do seu cartão ou dados pessoais em sites que você não conhece 100%."
      </div>

      <div>
        Na era digital, os golpes online se tornaram uma ameaça constante, explorando a confiança e a vulnerabilidade de
        muitas pessoas. Esse projeto nasceu justamente após ver tios, avós e outros familiares compartilharem links e
        sites fraudulentos, acreditando na legitimidade de ambientes que, na verdade, foram criados para enganar. O
        objetivo aqui é educar e alertar sem causar pânico, mostrando como os golpistas operam e como você pode se
        proteger.
        <br />
        Por que as Pessoas Caem nesses Golpes? Os golpistas investem em design e comunicação de alta qualidade para
        criar um ambiente que transmite segurança. Sites falsos podem exibir cadeados, selos de "segurança" e outras
        marcas visuais que, à primeira vista, parecem indicar a veracidade do conteúdo. Muitas pessoas, principalmente
        aquelas que não lidam diariamente com tecnologia ou que não estão atualizadas sobre as táticas usadas por
        criminosos, acabam se deixando enganar pela aparência profissional e pela urgência transmitida nas mensagens.
        <br />
        Como os Golpistas Operam
        <ul>
          <li>
            Os criminosos criam páginas e e-mails que imitam sites confiáveis, utilizando técnicas sofisticadas como:
          </li>

          <li>Design Profissional: Layouts limpos e selos de segurança falsos para transmitir credibilidade.</li>
          <li>
            Urgência e Alarme: Mensagens que induzem ao medo e à pressa, como alertas de vazamento de dados ou ofertas
            imperdíveis.
          </li>
          <li>
            Solicitação de Dados Sensíveis: Pedem informações pessoais e financeiras, como número do cartão, CPF, senha
            e outros dados críticos, que podem ser usados para fraudes.
          </li>
        </ul>
        <br />
        Essas táticas exploram tanto a confiança inata quanto o desconhecimento sobre práticas de segurança digital,
        tornando o público idoso e menos familiarizado com tecnologias especialmente vulnerável.
        <br />
        A Importância de Entender o Que Está Acontecendo Conhecer as estratégias utilizadas pelos golpistas é
        fundamental para se proteger. Compreender que um ambiente pode parecer seguro, mas ainda assim ser fraudulento,
        é o primeiro passo para evitar cair em armadilhas. Esse conhecimento permite que o usuário questione, verifique
        e, acima de tudo, compartilhe informações corretas com amigos e familiares. No caso deste projeto, é importante
        destacar que nenhum dado inserido foi salvo ou armazenado durante a simulação – a intenção é puramente
        educativa.
        <br />
        Recomendações e Fontes Confiáveis Para quem deseja confirmar a legitimidade de um site ou checar a segurança de
        uma transação, é recomendado recorrer a fontes confiáveis, como:
        <ul>
          <li>
            Sites Oficiais dos Bancos: Sempre acesse diretamente o site do seu banco digitando o endereço manualmente no
            navegador.
          </li>

          <li>Banco Central e PROCON: Órgãos oficiais que frequentemente publicam alertas e dicas de segurança.</li>
          <li>
            Certificadoras Digitais: Ferramentas como SSL Checker ou portais de certificação digital (ex.: Certisign)
            ajudam a verificar se o certificado de segurança de um site é válido.
          </li>
        </ul>
        Ao combinar essas práticas com um olhar crítico, você estará melhor preparado para identificar e evitar golpes
        online.
      </div>

      <ul className="flex flex-col gap-4">
        <li>
          ✅ Desconfie de sites que pedem seus dados sensíveis. Sites verdadeiros de bancos e empresas nunca pedem seu
          cartão completo ou sua senha.
        </li>
        <li>
          ✅ Verifique a URL antes de preencher qualquer informação. Golpistas usam domínios falsos como
          banco-seguro.com em vez de banco.com.br.
        </li>
        <li>
          ✅ Nunca clique em links de e-mails ou mensagens suspeitas. Prefira digitar o site manualmente no navegador.
        </li>
        <li>
          ✅ Procure sinais de fraude. Se o site promete "dinheiro fácil", "verificação urgente" ou "prêmios gratuitos",
          é golpe!
        </li>
        <li>
          ✅ Habilite notificações de compras no cartão. Seu banco pode avisar imediatamente caso uma compra suspeita
          seja feita.
        </li>
        <li>✅ Compartilhe este site com seus amigos e familiares. A melhor defesa contra golpes é a informação!</li>
      </ul>

      <div>
        📢 Compartilhe e proteja quem você ama! ("Envie para amigos e familiares para que eles também aprendam a evitar
        golpes!")
        {/* Botões de compartilhamento para WhatsApp, Facebook e Telegram facilitariam a viralização. */}
      </div>
    </div>
  )
}
