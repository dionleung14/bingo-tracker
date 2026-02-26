import React from "react";

export default function BingoBoard({
  calledNumbers,
  maxNums
}: {
  calledNumbers: number[];
  maxNums: number;
}) {


  return (
    <div>
      BingoBoard
      <div>Called numbers: {calledNumbers.join(", ")}</div>
      <div>Max numbers: {maxNums}</div>
      <table>
        <tbody>
          <tr>
            <th>B</th>
            <td className={calledNumbers.includes(1) ? "called" : ""}>1</td>
            <td className={calledNumbers.includes(2) ? "called" : ""}>2</td>
            <td className={calledNumbers.includes(3) ? "called" : ""}>3</td>
            <td className={calledNumbers.includes(4) ? "called" : ""}>4</td>
            <td className={calledNumbers.includes(5) ? "called" : ""}>5</td>
            <td className={calledNumbers.includes(6) ? "called" : ""}>6</td>
            <td className={calledNumbers.includes(7) ? "called" : ""}>7</td>
            <td className={calledNumbers.includes(8) ? "called" : ""}>8</td>
            <td className={calledNumbers.includes(9) ? "called" : ""}>9</td>
            <td className={calledNumbers.includes(10) ? "called" : ""}>10</td>
            <td className={calledNumbers.includes(11) ? "called" : ""}>11</td>
            <td className={calledNumbers.includes(12) ? "called" : ""}>12</td>
            <td className={calledNumbers.includes(13) ? "called" : ""}>13</td>
            <td className={calledNumbers.includes(14) ? "called" : ""}>14</td>
            <td className={calledNumbers.includes(15) ? "called" : ""}>15</td>
          </tr>
          <tr>
            <th>I</th>
            <td className={calledNumbers.includes(16) ? "called" : ""}>16</td>
            <td className={calledNumbers.includes(17) ? "called" : ""}>17</td>
            <td className={calledNumbers.includes(18) ? "called" : ""}>18</td>
            <td className={calledNumbers.includes(19) ? "called" : ""}>19</td>
            <td className={calledNumbers.includes(20) ? "called" : ""}>20</td>
            <td className={calledNumbers.includes(21) ? "called" : ""}>21</td>
            <td className={calledNumbers.includes(22) ? "called" : ""}>22</td>
            <td className={calledNumbers.includes(23) ? "called" : ""}>23</td>
            <td className={calledNumbers.includes(24) ? "called" : ""}>24</td>
            <td className={calledNumbers.includes(25) ? "called" : ""}>25</td>
            <td className={calledNumbers.includes(26) ? "called" : ""}>26</td>
            <td className={calledNumbers.includes(27) ? "called" : ""}>27</td>
            <td className={calledNumbers.includes(28) ? "called" : ""}>28</td>
            <td className={calledNumbers.includes(29) ? "called" : ""}>29</td>
            <td className={calledNumbers.includes(30) ? "called" : ""}>30</td>
          </tr>
          <tr>
            <th>N</th>
            <td className={calledNumbers.includes(31) ? "called" : ""}>31</td>
            <td className={calledNumbers.includes(32) ? "called" : ""}>32</td>
            <td className={calledNumbers.includes(33) ? "called" : ""}>33</td>
            <td className={calledNumbers.includes(34) ? "called" : ""}>34</td>
            <td className={calledNumbers.includes(35) ? "called" : ""}>35</td>
            <td className={calledNumbers.includes(36) ? "called" : ""}>36</td>
            <td className={calledNumbers.includes(37) ? "called" : ""}>37</td>
            <td className={calledNumbers.includes(38) ? "called" : ""}>38</td>
            <td className={calledNumbers.includes(39) ? "called" : ""}>39</td>
            <td className={calledNumbers.includes(40) ? "called" : ""}>40</td>
            <td className={calledNumbers.includes(41) ? "called" : ""}>41</td>
            <td className={calledNumbers.includes(42) ? "called" : ""}>42</td>
            <td className={calledNumbers.includes(43) ? "called" : ""}>43</td>
            <td className={calledNumbers.includes(44) ? "called" : ""}>44</td>
            <td className={calledNumbers.includes(45) ? "called" : ""}>45</td>
          </tr>
          <tr>
            <th>G</th>
            <td className={calledNumbers.includes(46) ? "called" : ""}>46</td>
            <td className={calledNumbers.includes(47) ? "called" : ""}>47</td>
            <td className={calledNumbers.includes(48) ? "called" : ""}>48</td>
            <td className={calledNumbers.includes(49) ? "called" : ""}>49</td>
            <td className={calledNumbers.includes(50) ? "called" : ""}>50</td>
            <td className={calledNumbers.includes(51) ? "called" : ""}>51</td>
            <td className={calledNumbers.includes(52) ? "called" : ""}>52</td>
            <td className={calledNumbers.includes(53) ? "called" : ""}>53</td>
            <td className={calledNumbers.includes(54) ? "called" : ""}>54</td>
            <td className={calledNumbers.includes(55) ? "called" : ""}>55</td>
            <td className={calledNumbers.includes(56) ? "called" : ""}>56</td>
            <td className={calledNumbers.includes(57) ? "called" : ""}>57</td>
            <td className={calledNumbers.includes(58) ? "called" : ""}>58</td>
            <td className={calledNumbers.includes(59) ? "called" : ""}>59</td>
            <td className={calledNumbers.includes(60) ? "called" : ""}>60</td>
          </tr>
          <tr>
            <th>O</th>
            <td className={calledNumbers.includes(61) ? "called" : ""}>61</td>
            <td className={calledNumbers.includes(62) ? "called" : ""}>62</td>
            <td className={calledNumbers.includes(63) ? "called" : ""}>63</td>
            <td className={calledNumbers.includes(64) ? "called" : ""}>64</td>
            <td className={calledNumbers.includes(65) ? "called" : ""}>65</td>
            <td className={calledNumbers.includes(66) ? "called" : ""}>66</td>
            <td className={calledNumbers.includes(67) ? "called" : ""}>67</td>
            <td className={calledNumbers.includes(68) ? "called" : ""}>68</td>
            <td className={calledNumbers.includes(69) ? "called" : ""}>69</td>
            <td className={calledNumbers.includes(70) ? "called" : ""}>70</td>
            <td className={calledNumbers.includes(71) ? "called" : ""}>71</td>
            <td className={calledNumbers.includes(72) ? "called" : ""}>72</td>
            <td className={calledNumbers.includes(73) ? "called" : ""}>73</td>
            <td className={calledNumbers.includes(74) ? "called" : ""}>74</td>
            <td className={calledNumbers.includes(75) ? "called" : ""}>75</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
