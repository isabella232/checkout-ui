import React from 'react';
import {classNames, variationName} from '@shopify/css-utilities';

import {useThemeConfiguration} from '../Theme';
import {Icon} from '../Icon';

import styles from './Thumbnail.css';

export interface Props {
  badge?: string | number;
  description: string;
  source?: string;
  /**
   * A list of source sizes for responsive images, used in [srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset).
   * e.g., ["https://example.org/foo_100x100.jpg", "https://example.org/foo_200x200.jpg 2x"]
   */
  sources?: string[];
}

export function Thumbnail({badge, description, source, sources}: Props) {
  const {
    thumbnail: {aspectRatio, border = 'full', badgeBackground = 'subdued'},
  } = useThemeConfiguration();

  return (
    <div
      className={classNames(
        styles.Thumbnail,
        border && styles[variationName('border', border)],
        aspectRatio &&
          aspectRatio < 1 &&
          styles['Thumbnail-aspectRatioLandscape'],
        aspectRatio &&
          aspectRatio > 1 &&
          styles['Thumbnail-aspectRatioPortrait'],
      )}
    >
      {badge != null && (
        <span
          className={classNames(
            styles.Badge,
            styles[variationName('Badge-background', badgeBackground)],
          )}
          aria-hidden
        >
          {badge}
        </span>
      )}
      {source ? (
        <img
          className={styles.Image}
          srcSet={sources?.join(', ')}
          src={source}
          alt={description}
        />
      ) : (
        <span className={classNames(styles.Placeholder)}>
          <span className={styles.Icon}>
            <Icon source="camera" />
          </span>
        </span>
      )}
    </div>
  );
}
