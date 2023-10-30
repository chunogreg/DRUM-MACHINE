const Inputs = ({
  onclick,
  clear,
  equals,
  decimal,
  divide,
  multiply,
  add,
  minus,
}) => {
  return (
    <div>
      <div>
        <input
          onClick={clear}
          type="button"
          id="clear"
          onChange={" "}
          value="Clear"
        />
        <input onClick={decimal} type="button" id="decimal" value="." />
        <input onClick={divide} type="button" id="divide" value="/" />
      </div>
      <div>
        <input onClick={onclick} type="button" id="seven" value="7" />
        <input onClick={onclick} type="button" id="eight" value="8" />
        <input onClick={onclick} type="button" id="nine" value="9" />
        <input onClick={multiply} type="button" id="multiply" value="*" />
      </div>
      <div>
        <input onClick={onclick} type="button" id="four" value="4" />
        <input onClick={onclick} type="button" id="five" value="5" />
        <input onClick={onclick} type="button" id="six" value="6" />
        <input onClick={add} type="button" id="add" value="+" />
      </div>
      <div>
        <input onClick={onclick} type="button" id="one" value="1" />
        <input onClick={onclick} type="button" id="two" value="2" />
        <input onClick={onclick} type="button" id="three" value="3" />
        <input onClick={minus} type="button" id="subtract" value="-" />
      </div>
      <div>
        <input onClick={onclick} type="button" id="zero" value="0" />
        <input type="button" id="equals" onClick={equals} value="=" />
      </div>
    </div>
  );
};

export default Inputs;
