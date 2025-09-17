import { Sparkles, TrendingUp } from "lucide-react";

interface AISummaryProps {
  summary: string;
  query: string;
}

export const AISummary = ({ summary, query }: AISummaryProps) => {
  return (
    <div className="ai-summary mb-8">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-lg font-semibold">AI Recommendation</h2>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <p className="text-muted-foreground text-sm mb-3">
            Based on your search for: <span className="font-medium text-foreground">"{query}"</span>
          </p>
          <div className="prose prose-sm max-w-none">
            <p className="text-foreground leading-relaxed">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};