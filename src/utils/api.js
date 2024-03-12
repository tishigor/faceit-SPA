// todo https://axios-http.com/docs/instance
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchTeams = async (matchId) => {
  const root = import.meta.env.VITE_URL_MATCH;
  const url = root + matchId;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data.teams;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

function checkWinner(item, playerId) {
  const { winner } = item.results;
  return !!item.teams[winner].players.find((el) => el.player_id === playerId);
}

export const fetchPlayer = async (playerId, twoWeeksAgoTimestamp) => {
  const url = import.meta.env.VITE_URL_PLAYER_HISTORY.replace('<player_id>', playerId);
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        limit: 100,
        from: twoWeeksAgoTimestamp,
      },
    });
    const stats = {};
    stats.allGames = 0;
    stats.winnerGames = 0;
    response.data.items.forEach((item) => {
      if (item.game_id === 'cs2' && item.competition_name === 'COMPETITIVE 5v5' && item.status === 'finished') {
        stats.allGames += 1;
        const winner = checkWinner(item, playerId);
        if (winner) stats.winnerGames++;
      }
    });
    stats.loserGames = stats.allGames - stats.winnerGames;
    return stats;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
