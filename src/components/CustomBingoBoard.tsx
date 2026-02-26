import React from "react";

export default function CustomBingoBoard({
  calledNumbers,
  maxNums, clickToActivate
}: {
  calledNumbers: number[];
  maxNums: number;
  clickToActivate: (number: number) => void;
}) {


  return (
    <div>
      Custom BingoBoard
      <div>Called numbers: {calledNumbers.join(", ")}</div>
      <div>Max numbers: {maxNums}</div>
      <table>
        <tbody>
          <tr>
            <th>B</th>
            <td className={calledNumbers.includes(1) ? "called" : ""}><button onClick={() => clickToActivate(1)}>1</button></td>
            <td className={calledNumbers.includes(2) ? "called" : ""}><button onClick={() => clickToActivate(2)}>2</button></td>
            <td className={calledNumbers.includes(3) ? "called" : ""}><button onClick={() => clickToActivate(3)}>3</button></td>
            <td className={calledNumbers.includes(4) ? "called" : ""}><button onClick={() => clickToActivate(4)}>4</button></td>
            <td className={calledNumbers.includes(5) ? "called" : ""}><button onClick={() => clickToActivate(5)}>5</button></td>
            <td className={calledNumbers.includes(6) ? "called" : ""}><button onClick={() => clickToActivate(6)}>6</button></td>
            <td className={calledNumbers.includes(7) ? "called" : ""}><button onClick={() => clickToActivate(7)}>7</button></td>
            <td className={calledNumbers.includes(8) ? "called" : ""}><button onClick={() => clickToActivate(8)}>8</button></td>
            <td className={calledNumbers.includes(9) ? "called" : ""}><button onClick={() => clickToActivate(9)}>9</button></td>
            <td className={calledNumbers.includes(10) ? "called" : ""}><button onClick={() => clickToActivate(10)}>10</button></td>
            <td className={calledNumbers.includes(11) ? "called" : ""}><button onClick={() => clickToActivate(11)}>11</button></td>
            <td className={calledNumbers.includes(12) ? "called" : ""}><button onClick={() => clickToActivate(12)}>12</button></td>
            <td className={calledNumbers.includes(13) ? "called" : ""}><button onClick={() => clickToActivate(13)}>13</button></td>
            <td className={calledNumbers.includes(14) ? "called" : ""}><button onClick={() => clickToActivate(14)}>14</button></td>
            <td className={calledNumbers.includes(15) ? "called" : ""}><button onClick={() => clickToActivate(15)}>15</button></td>
          </tr>
          <tr>
            <th>I</th>
            <td className={calledNumbers.includes(16) ? "called" : ""}><button onClick={() => clickToActivate(16)}>16</button></td>
            <td className={calledNumbers.includes(17) ? "called" : ""}><button onClick={() => clickToActivate(17)}>17</button></td>
            <td className={calledNumbers.includes(18) ? "called" : ""}><button onClick={() => clickToActivate(18)}>18</button></td>
            <td className={calledNumbers.includes(19) ? "called" : ""}><button onClick={() => clickToActivate(19)}>19</button></td>
            <td className={calledNumbers.includes(20) ? "called" : ""}><button onClick={() => clickToActivate(20)}>20</button></td>
            <td className={calledNumbers.includes(21) ? "called" : ""}><button onClick={() => clickToActivate(21)}>21</button></td>
            <td className={calledNumbers.includes(22) ? "called" : ""}><button onClick={() => clickToActivate(22)}>22</button></td>
            <td className={calledNumbers.includes(23) ? "called" : ""}><button onClick={() => clickToActivate(23)}>23</button></td>
            <td className={calledNumbers.includes(24) ? "called" : ""}><button onClick={() => clickToActivate(24)}>24</button></td>
            <td className={calledNumbers.includes(25) ? "called" : ""}><button onClick={() => clickToActivate(25)}>25</button></td>
            <td className={calledNumbers.includes(26) ? "called" : ""}><button onClick={() => clickToActivate(26)}>26</button></td>
            <td className={calledNumbers.includes(27) ? "called" : ""}><button onClick={() => clickToActivate(27)}>27</button></td>
            <td className={calledNumbers.includes(28) ? "called" : ""}><button onClick={() => clickToActivate(28)}>28</button></td>
            <td className={calledNumbers.includes(29) ? "called" : ""}><button onClick={() => clickToActivate(29)}>29</button></td>
            <td className={calledNumbers.includes(30) ? "called" : ""}><button onClick={() => clickToActivate(30)}>30</button></td>
          </tr>
          <tr>
            <th>N</th>
            <td className={calledNumbers.includes(31) ? "called" : ""}><button onClick={() => clickToActivate(31)}>31</button></td>
            <td className={calledNumbers.includes(32) ? "called" : ""}><button onClick={() => clickToActivate(32)}>32</button></td>
            <td className={calledNumbers.includes(33) ? "called" : ""}><button onClick={() => clickToActivate(33)}>33</button></td>
            <td className={calledNumbers.includes(34) ? "called" : ""}><button onClick={() => clickToActivate(34)}>34</button></td>
            <td className={calledNumbers.includes(35) ? "called" : ""}><button onClick={() => clickToActivate(35)}>35</button></td>
            <td className={calledNumbers.includes(36) ? "called" : ""}><button onClick={() => clickToActivate(36)}>36</button></td>
            <td className={calledNumbers.includes(37) ? "called" : ""}><button onClick={() => clickToActivate(37)}>37</button></td>
            <td className={calledNumbers.includes(38) ? "called" : ""}><button onClick={() => clickToActivate(38)}>38</button></td>
            <td className={calledNumbers.includes(39) ? "called" : ""}><button onClick={() => clickToActivate(39)}>39</button></td>
            <td className={calledNumbers.includes(40) ? "called" : ""}><button onClick={() => clickToActivate(40)}>40</button></td>
            <td className={calledNumbers.includes(41) ? "called" : ""}><button onClick={() => clickToActivate(41)}>41</button></td>
            <td className={calledNumbers.includes(42) ? "called" : ""}><button onClick={() => clickToActivate(42)}>42</button></td>
            <td className={calledNumbers.includes(43) ? "called" : ""}><button onClick={() => clickToActivate(43)}>43</button></td>
            <td className={calledNumbers.includes(44) ? "called" : ""}><button onClick={() => clickToActivate(44)}>44</button></td>
            <td className={calledNumbers.includes(45) ? "called" : ""}><button onClick={() => clickToActivate(45)}>45</button></td>
          </tr>
          <tr>
            <th>G</th>
            <td className={calledNumbers.includes(46) ? "called" : ""}><button onClick={() => clickToActivate(46)}>46</button></td>
            <td className={calledNumbers.includes(47) ? "called" : ""}><button onClick={() => clickToActivate(47)}>47</button></td>
            <td className={calledNumbers.includes(48) ? "called" : ""}><button onClick={() => clickToActivate(48)}>48</button></td>
            <td className={calledNumbers.includes(49) ? "called" : ""}><button onClick={() => clickToActivate(49)}>49</button></td>
            <td className={calledNumbers.includes(50) ? "called" : ""}><button onClick={() => clickToActivate(50)}>50</button></td>
            <td className={calledNumbers.includes(51) ? "called" : ""}><button onClick={() => clickToActivate(51)}>51</button></td>
            <td className={calledNumbers.includes(52) ? "called" : ""}><button onClick={() => clickToActivate(52)}>52</button></td>
            <td className={calledNumbers.includes(53) ? "called" : ""}><button onClick={() => clickToActivate(53)}>53</button></td>
            <td className={calledNumbers.includes(54) ? "called" : ""}><button onClick={() => clickToActivate(54)}>54</button></td>
            <td className={calledNumbers.includes(55) ? "called" : ""}><button onClick={() => clickToActivate(55)}>55</button></td>
            <td className={calledNumbers.includes(56) ? "called" : ""}><button onClick={() => clickToActivate(56)}>56</button></td>
            <td className={calledNumbers.includes(57) ? "called" : ""}><button onClick={() => clickToActivate(57)}>57</button></td>
            <td className={calledNumbers.includes(58) ? "called" : ""}><button onClick={() => clickToActivate(58)}>58</button></td>
            <td className={calledNumbers.includes(59) ? "called" : ""}><button onClick={() => clickToActivate(59)}>59</button></td>
            <td className={calledNumbers.includes(60) ? "called" : ""}><button onClick={() => clickToActivate(60)}>60</button></td>
          </tr>
          <tr>
            <th>O</th>
            <td className={calledNumbers.includes(61) ? "called" : ""}><button onClick={() => clickToActivate(61)}>61</button></td>
            <td className={calledNumbers.includes(62) ? "called" : ""}><button onClick={() => clickToActivate(62)}>62</button></td>
            <td className={calledNumbers.includes(63) ? "called" : ""}><button onClick={() => clickToActivate(63)}>63</button></td>
            <td className={calledNumbers.includes(64) ? "called" : ""}><button onClick={() => clickToActivate(64)}>64</button></td>
            <td className={calledNumbers.includes(65) ? "called" : ""}><button onClick={() => clickToActivate(65)}>65</button></td>
            <td className={calledNumbers.includes(66) ? "called" : ""}><button onClick={() => clickToActivate(66)}>66</button></td>
            <td className={calledNumbers.includes(67) ? "called" : ""}><button onClick={() => clickToActivate(67)}>67</button></td>
            <td className={calledNumbers.includes(68) ? "called" : ""}><button onClick={() => clickToActivate(68)}>68</button></td>
            <td className={calledNumbers.includes(69) ? "called" : ""}><button onClick={() => clickToActivate(69)}>69</button></td>
            <td className={calledNumbers.includes(70) ? "called" : ""}><button onClick={() => clickToActivate(70)}>70</button></td>
            <td className={calledNumbers.includes(71) ? "called" : ""}><button onClick={() => clickToActivate(71)}>71</button></td>
            <td className={calledNumbers.includes(72) ? "called" : ""}><button onClick={() => clickToActivate(72)}>72</button></td>
            <td className={calledNumbers.includes(73) ? "called" : ""}><button onClick={() => clickToActivate(73)}>73</button></td>
            <td className={calledNumbers.includes(74) ? "called" : ""}><button onClick={() => clickToActivate(74)}>74</button></td>
            <td className={calledNumbers.includes(75) ? "called" : ""}><button onClick={() => clickToActivate(75)}>75</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
