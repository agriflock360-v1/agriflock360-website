import { useEffect, useRef, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, BookOpen, MessageCircle, RotateCcw, Send, X } from "lucide-react";
import { Link } from "react-router-dom";
import { defaultQuestions, knowledgeArticles } from "@/data/knowledgeBase";
import { searchKnowledge, type KnowledgeReply } from "@/lib/knowledgeSearch";
import "./KnowledgeBaseChat.css";

interface Exchange { id: number; question: string; reply: KnowledgeReply }
const MAX_EXCHANGES = 20;

export function KnowledgeBaseChat() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const input = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  useEffect(() => {
    if (open && log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [open, exchanges]);

  const ask = (value: string, articleId?: string) => {
    const cleaned = value.trim().slice(0, 400);
    if (!cleaned) return;
    const reply = articleId
      ? { article: knowledgeArticles.find(article => article.id === articleId), suggestions: [] }
      : searchKnowledge(cleaned);
    const exchange = { id: nextId.current++, question: cleaned, reply };
    setExchanges(previous => [...previous.slice(-(MAX_EXCHANGES - 1)), exchange]);
    setQuestion("");
    input.current?.focus();
  };

  const submit = (event: FormEvent) => { event.preventDefault(); ask(question); };
  const reset = () => { setExchanges([]); setQuestion(""); input.current?.focus(); };
  const suggestions = exchanges.length ? exchanges[exchanges.length - 1].reply.suggestions : defaultQuestions;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="knowledge-launcher" aria-label="Ask AgriFlock: open website knowledge base">
          <MessageCircle size={23} aria-hidden="true" /><span>Ask AgriFlock</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="knowledge-overlay" />
        <Dialog.Content className="knowledge-panel" onOpenAutoFocus={event => { event.preventDefault(); input.current?.focus(); }}>
          <header className="knowledge-header">
            <span className="knowledge-mark"><BookOpen size={23} aria-hidden="true" /></span>
            <div><Dialog.Title>AgriFlock Guide</Dialog.Title><Dialog.Description>Answers from our website</Dialog.Description></div>
            <div className="knowledge-header__actions">
              <button type="button" onClick={reset} aria-label="Clear conversation" title="Clear conversation" disabled={!exchanges.length}><RotateCcw size={18} aria-hidden="true" /></button>
              <Dialog.Close asChild><button type="button" aria-label="Close knowledge base"><X size={21} aria-hidden="true" /></button></Dialog.Close>
            </div>
          </header>
          <div className="knowledge-messages" ref={log}>
            <div className="knowledge-welcome">
              <p className="knowledge-welcome__label">A little guidance. A clear next step.</p>
              <h2>What would you like to know?</h2>
              <p>Explore our company, app features, pricing and getting started. This is an automated website guide, not a live support agent.</p>
            </div>
            <div role="log" aria-label="Knowledge base conversation" aria-live="polite" aria-relevant="additions" aria-atomic="false">
              {exchanges.map(exchange => (
                <div className="knowledge-exchange" key={exchange.id}>
                  <p className="knowledge-question"><span className="sr-only">You: </span>{exchange.question}</p>
                  <article className="knowledge-answer" aria-label="AgriFlock Guide answer">
                    {exchange.reply.article ? <>
                      <h3>{exchange.reply.article.title}</h3>
                      {exchange.reply.article.answer.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                      <div className="knowledge-sources"><span>Read more on our website</span>{exchange.reply.article.sources.map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={14} aria-hidden="true" /></Link>)}</div>
                    </> : <p>{exchange.reply.message}</p>}
                  </article>
                </div>
              ))}
            </div>
            {suggestions.length > 0 && <div className="knowledge-suggestions" aria-label="Suggested questions">{suggestions.map(id => {
              const article = knowledgeArticles.find(item => item.id === id)!;
              return <button type="button" key={id} onClick={() => ask(article.question, id)}>{article.question}<ArrowUpRight size={14} aria-hidden="true" /></button>;
            })}</div>}
          </div>
          <div className="knowledge-bottom">
            <form onSubmit={submit} className="knowledge-form">
              <label htmlFor="knowledge-question" className="sr-only">Ask about AgriFlock 360</label>
              <input ref={input} id="knowledge-question" type="text" placeholder="Ask about AgriFlock 360…" value={question} onChange={event => setQuestion(event.target.value)} maxLength={400} autoComplete="off" required />
              <button type="submit" disabled={!question.trim()} aria-label="Send question"><Send size={19} aria-hidden="true" /></button>
            </form>
            <p className="knowledge-privacy">Messages stay in this browser and aren’t sent to our team.</p>
            <div className="knowledge-footer"><button type="button" onClick={() => ask("What can I ask about?", "features")}>Explore app features</button><Link to="/contact" onClick={() => setOpen(false)}>Contact the team<ArrowUpRight size={13} aria-hidden="true" /></Link></div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
