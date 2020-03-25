import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';


const Faqshowhide = () => (
  <div className="accordian-title my-1">
    <Accordion  atomic={true}>

      <AccordionItem title="Which license do I need?">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="How do I get access to a OkkJi?">
        <DummyContent />
      </AccordionItem>

      <AccordionItem title="How do I see previous orders?">
        <DummyContent />
      </AccordionItem>
      <AccordionItem title="Which license do I need?">
        <DummyContent />
      </AccordionItem>

    </Accordion>
  </div>
);

const DummyContent = () => (
  <p style={{ padding: '18px' }}>
    Uniquely leverage other's distinctive infomediaries rather than leveraged supply chains. Continually seize distributed collaboration and idea-sharing whereas user.
  </p>
);

export default Faqshowhide;