import { Comp, Match } from "~/types/Match";
import { queueIdDisplayValues } from "~/types/Queue";

interface MatchSummaryProps {
    match: Match;
    comp: Comp;
}

export const formatDate = (timestamp: number) => {
    const now = Date.now();
    const diff = (now - timestamp) / 1000;
    if (diff < 60) {
        return `${Math.floor(diff)}s ago`;
    } else if (diff < 3600) {
        const minutes = Math.floor(diff / 60);
        return `${minutes}m ago`;
    } else if (diff < 86400) {
        const hours = Math.floor(diff / 3600);
        return `${hours}h ago`;
    } else if (diff < 604800) {
        const days = Math.floor(diff / 86400);
        return `${days}d ago`;
    } else if (diff < 2419200) {
        const weeks = Math.floor(diff / 604800);
        return `${weeks}w ago`;
    } else if (diff < 31536000) {
        const months = Math.floor(diff / 2419200);
        return `${months}mo ago`;
    } else {
        const years = Math.floor(diff / 31536000);
        return `${years}y ago`;
    }
}

const MatchSummary: React.FC <MatchSummaryProps>= ({match, comp}) => {
    return (
        <div className="flex flex-col py-1 items-center">
            <span className="font-bold text-zinc-300">{`#${comp.placement}`}</span>
            <span className="text-zinc-400">{queueIdDisplayValues[match.Info.queue_id]}</span>
            <time className="text-zinc-400">{`${Math.floor(match.Info.game_length / 60)}:${Math.floor(match.Info.game_length % 60)}`}</time>
            <time className="text-zinc-400">{formatDate(match.Date)}</time>
        </div>
    );
}

export default MatchSummary;