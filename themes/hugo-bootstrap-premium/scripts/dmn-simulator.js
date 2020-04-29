// Separate JS to save file size on all other pages
import DMNSimulator from './modules/dmn-simulator';
import '../styles/dmn-styles.less';

if ($('.dmn-simulator').length > 0) {
  const dmnsimulator = new DMNSimulator();
  dmnsimulator.initialize();
}
