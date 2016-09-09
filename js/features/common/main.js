/**
 *  Entrance of common service
 *
 *
 *  @author  sherwin
 *  @date    Sep 9, 2016
 *
 */

import logical from './logical/main';
import ui from './ui/main';

export default [...logical, ...ui];
