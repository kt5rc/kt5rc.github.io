import { useState } from "react";

type Topic = {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
};

type Props = {
  topics: Topic[];
};

export function TopicTabs({ topics }: Props) {
  const [activeId, setActiveId] = useState(topics[0]?.id ?? "");

  const activeTopic = topics.find((topic) => topic.id === activeId) ?? topics[0];

  if (!activeTopic) {
    return null;
  }

  return (
    <div className="topic-tabs">
      <div className="topic-tab-list" role="tablist" aria-label="Focus areas">
        {topics.map((topic) => (
          <button
            key={topic.id}
            type="button"
            role="tab"
            aria-selected={topic.id === activeTopic.id}
            className={topic.id === activeTopic.id ? "is-active" : undefined}
            onClick={() => setActiveId(topic.id)}
          >
            {topic.label}
          </button>
        ))}
      </div>

      <div className="topic-panel" role="tabpanel">
        <p className="eyebrow">Current focus</p>
        <h3>{activeTopic.title}</h3>
        <p>{activeTopic.description}</p>
        <ul>
          {activeTopic.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
