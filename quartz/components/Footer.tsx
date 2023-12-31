import { version } from '../../package.json';
import style from './styles/footer.scss';
import {
    QuartzComponentConstructor,
    QuartzComponentProps,
} from './types';

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
            <p style={"font-size:smaller;"}>
                Created with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>, © {year}
            </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
