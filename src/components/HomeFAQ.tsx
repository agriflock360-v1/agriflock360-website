import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { homepageFaqs } from "@/data/knowledgeBase";
import "./HomeFAQ.css";

export const HomeFAQ = () => (
  <section id="faq" className="home-faq" aria-labelledby="faq-heading">
    <div className="home-faq__layout">
      <header className="home-faq__introduction">
        <p className="home-faq__eyebrow"><span aria-hidden="true" />Here to help</p>
        <h2 id="faq-heading">Frequently Asked <span>Questions</span></h2>
        <p className="home-faq__description">Everything you need to know about AgriFlock 360</p>
      </header>

      <Accordion type="single" collapsible className="home-faq__questions">
        {homepageFaqs.map(({ question, answer, sources }, index) => (
          <AccordionItem key={question} value={`faq-${index}`} className="home-faq__item">
            <AccordionTrigger className="home-faq__trigger">
              <span className="home-faq__question">
                <span className="home-faq__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span>{question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="home-faq__answer">
              {answer.map((paragraph, i) => <p key={i} className="whitespace-pre-line mb-3">{paragraph}</p>)}
              <Link to={sources[0].to} className="underline underline-offset-4">{sources[0].label}</Link>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <aside className="home-faq__help" aria-labelledby="faq-help-heading">
        <h3 id="faq-help-heading">Still have questions?</h3>
        <p>Talk to us about getting started with AgriFlock 360.</p>
        <Button variant="gold" asChild className="home-faq__contact">
          <Link to="/contact">Contact Us <ArrowRight aria-hidden="true" /></Link>
        </Button>
      </aside>
    </div>
  </section>
);
