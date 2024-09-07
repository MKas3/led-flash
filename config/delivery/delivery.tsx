import { TypewriterText } from '@/components/ui/typewriter-text';

export const deliveryQuestions = [
  {
    answer: (
      <p>
        <TypewriterText>
          Мы отправляем через транспортную компанию “СДЭК” по РФ и “Яндекс доставкой” по Санкт-Петербургу. Если в вашем населенном пункте отсутствует ТК “СДЭК” тогда мы можем отправить заказ другими удобными способами например ТК “Деловые линии”.
        </TypewriterText>
      </p>
    ),
    question: 'Какие способы доставки есть?',
    value: 'delivery-methods'
  },
  {
    answer: (
      <>
        <p>
          <TypewriterText>
            Курьерская служба по Санкт-Петербургу - от 190 рублей;
            Курьерская служба по Ленинградской области - от 490 рублей;
          </TypewriterText>
        </p>
        <p>
          <TypewriterText delay={625}>
            СДЭК (ПВЗ) по Санкт-Петербургу - от 190 рублей;
            СДЭК (ПВЗ) по Ленинградской области - от 240 рублей;
          </TypewriterText>
        </p>
        <p>
          <TypewriterText delay={1250}>
            СДЭК по России от 290 рублей в зависимости от удаленности вашего города от Санкт-Петербурга.
          </TypewriterText>
        </p>
      </>
    ),
    question: 'Сколько стоит доставка?',
    value: 'how-much-cost'
  },
  {
    answer: (
      <>
        <p>
          <TypewriterText>
            Забрать заказ можно бесплатно с нашего производства после подтверждения о его готовности нашим менеджером по адресу: г. Санкт-Петербург, Софийская 4д. в будние дни с 10.00 до 21.00. В выходные дни самовывоз возможен по согласованию.
          </TypewriterText>
        </p>
        <p>
          <TypewriterText delay={850}>
            Арендованные вывески можно получить в день оформления заказа.
          </TypewriterText>
        </p>
      </>
    ),
    question: 'Есть ли самовывоз?',
    value: 'is-there-pickup'
  },
  {
    answer: (
      <p>
        <TypewriterText>
          Срочные заказы изготавливает от 1 дня. Стандартные сроки изготовления вывески 3−5 дней. Сроки могут меняться как в меньшую, так и в большую сторону, в зависимости от сложности вывески и загруженности производства.
        </TypewriterText>
      </p>
    ),
    question: 'Какие сроки изготовления заказа?',
    value: 'production-time'
  },
  {
    answer: (
      <>
        <p>
          <TypewriterText>
            Если заказ был отправлен ТК СДЭК, вы можете отследить заказ по трек-номеру, который вам отправим ваш менеджер. Введите его на официальном сайте службы доставки – и контролируйте весь путь вашей посылки: отследить доставку СДЭК.
          </TypewriterText>
        </p>
        <p>
          <TypewriterText delay={850}>
            Если заказ был отправлен Яндексом, вам придет уведомление со ссылкой на отслеживание. При отправке другими ТК, заказ можно отследить на сайте этих ТК или в приложении ТК.
          </TypewriterText>
        </p>
      </>
    ),
    question: 'Как отследить заказ?',
    value: 'how-track-order'
  },
  {
    answer: (
      <p>
        <TypewriterText>
          На наши изделия распространяется гарантия — 18 месяцев при соблюдении рекомендаций по эксплуатации, которые вы получите вместе с вывеской.
        </TypewriterText>
      </p>
    ),
    question: 'Какие гарантии на вывеску?',
    value: 'warranties'
  }
];
