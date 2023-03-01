import { QueueId } from "./Queue";

export interface Match {
	id: string;
    Date: number;
    DataVersion: string;
    Info: MatchInfo;
}

export interface MatchInfo {
    game_datetime: number;
    game_length: number;
    game_version: string;
    queue_id: QueueId;
    tft_game_type: string;
    tft_set_core_name: string;
    tft_set_number: number;
    participants: Comp[];
}

export interface Unit {
    character_id: string;
    itemNames: string[];
    items: number[];
    name: string;
    rarity: number;
    tier: number;
}

export interface Trait {
    name: string;
    num_units: number;
    style: number;
    tier_current: number;
    tier_total: number;
}

export interface Comp {
    augments: string[];
    companion: {
        content_ID: string;
        item_ID: number;
        skin_ID: number;
        species: string;
    };
    gold_left: number;
    last_round: number;
    level: number;
    placement: number;
    players_eliminated: number;
    puuid: string;
    time_eliminated: number;
    total_damage_to_players: number;
    traits: Trait[];
    units: Unit[];
}
