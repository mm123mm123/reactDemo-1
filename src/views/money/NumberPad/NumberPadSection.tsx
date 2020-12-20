import {Wrapper} from 'views/money/NumberPad/Wrapper';

type Props = {
  value: string
  onChange: (number: string) => void
  onOK: () => void
}
const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value;
  const _setOutput = (text: string) => props.onChange(text);

  function setOutput(text: string) {
    if (output.length < 16) {
      _setOutput(text);
    }
  }

  const keyBoard = (e: React.MouseEvent) => {
    const keyText = (e.target as HTMLButtonElement).textContent;
    switch (keyText) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (output === '0') {
          setOutput(keyText);
        } else {
          setOutput(output + keyText);
        }
        break;
      case '0':
        if (output !== '0') {
          setOutput(output + keyText);
        }
        break;
      case '.':
        if (output.indexOf('.') < 0) {
          setOutput(output + keyText);
        }
        break;
      case '删除':
        if (output.length > 1) {
          _setOutput(output.slice(0, output.length - 1));
        } else {
          setOutput('0');
        }
        break;
      case '清空':
        _setOutput('0');
        break;
      case 'OK':
        props.onOK();
        break;
    }
  };

  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={keyBoard}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};
export {NumberPadSection};