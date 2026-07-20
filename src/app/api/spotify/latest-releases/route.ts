import { NextResponse } from 'next/server';
import { getArtistTopTracks, convertSpotifyTrackToTrack } from '@/lib/spotify';
import { singles } from '@/data/music';

const IMAD_SELIM_ARTIST_ID = '7LabWYs3sUqDUmbu18DvVQ';

export async function GET() {
  try {
    if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
      return NextResponse.json({
        success: true,
        data: singles.slice(0, 3),
        source: 'fallback',
      });
    }

    // Fetch top tracks from Spotify
    const spotifyTracks = await getArtistTopTracks(IMAD_SELIM_ARTIST_ID, 'US');

    // Convert to our Track format and take top 3
    const tracks = spotifyTracks
      .slice(0, 3)
      .map((track, index) => convertSpotifyTrackToTrack(track, index));

    return NextResponse.json({
      success: true,
      data: tracks,
      source: 'spotify',
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch latest releases',
      },
      { status: 500 }
    );
  }
}
