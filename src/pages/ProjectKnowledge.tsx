import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText } from "lucide-react";
import { projectKnowledgeArticles, projectSources } from "@/data/projectKnowledge";
import "./ProjectKnowledge.css";

export default function ProjectKnowledge() {
  return <div className="project-guide">
    <header className="project-guide__hero"><div className="project-guide__container">
      <p className="project-guide__eyebrow"><BookOpen size={17} aria-hidden="true" />AgriFlock 360 · Project knowledge base</p>
      <h1>A closer look at<br />AgriFlock 360.</h1>
      <p className="project-guide__intro">Practical answers about offline recording, farmer feedback, solar brooding and the project's environmental goals.</p>
      <div className="project-guide__links"><Link to="/features">Explore app features<ArrowRight size={17} aria-hidden="true" /></Link><Link to="/">Ask the homepage guide<ArrowRight size={17} aria-hidden="true" /></Link></div>
      <p className="project-guide__date">Reviewed 12 September 2026</p>
    </div></header>
    <div className="project-guide__container project-guide__layout">
      <nav className="project-guide__contents" aria-label="Project knowledge topics"><h2>Explore the topics</h2><ol>{projectKnowledgeArticles.map((article, i) => <li key={article.id}><Link to={`#${article.id}`}><span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>{article.title}</Link></li>)}</ol></nav>
      <div className="project-guide__articles">
        <aside className="project-guide__note"><strong>Understand what is available and what is planned.</strong><p>Each topic identifies whether its source describes an implementation, a design direction, a model or a documented approach. Impact projections describe potential outcomes, rather than results already achieved. See <Link to="/pricing">current pricing</Link> and <Link to="/download">app access</Link> for the latest published options.</p></aside>
        {projectKnowledgeArticles.map(article => <section className="project-guide__article" key={article.id} id={article.id} tabIndex={-1} aria-labelledby={`${article.id}-heading`}>
          <p className="project-guide__status">{article.status}</p><h2 id={`${article.id}-heading`}>{article.question}</h2>
          {article.answer.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
          <div className="project-guide__sources"><h3><FileText size={15} aria-hidden="true" />Source context</h3><ul>{article.documentRefs.map(ref => <li key={ref.id}><strong>{projectSources[ref.id].title}</strong><span>{projectSources[ref.id].date} · {ref.section}</span></li>)}</ul></div>
        </section>)}
      </div>
    </div>
    <section className="project-guide__contact"><div className="project-guide__container"><div><h2>Need an answer for your farm?</h2><p>Talk to our team about current availability, your account or a project partnership.</p></div><Link to="/contact">Contact the team<ArrowRight size={18} aria-hidden="true" /></Link></div></section>
  </div>;
}
