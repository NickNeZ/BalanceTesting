/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2541.0, "series": [{"data": [[0.0, 1.0], [0.1, 12.0], [0.2, 16.0], [0.3, 19.0], [0.4, 23.0], [0.5, 25.0], [0.6, 27.0], [0.7, 30.0], [0.8, 31.0], [0.9, 34.0], [1.0, 35.0], [1.1, 38.0], [1.2, 39.0], [1.3, 40.0], [1.4, 41.0], [1.5, 42.0], [1.6, 43.0], [1.7, 44.0], [1.8, 45.0], [1.9, 46.0], [2.0, 47.0], [2.1, 47.0], [2.2, 48.0], [2.3, 49.0], [2.4, 50.0], [2.5, 52.0], [2.6, 52.0], [2.7, 53.0], [2.8, 53.0], [2.9, 54.0], [3.0, 54.0], [3.1, 55.0], [3.2, 56.0], [3.3, 56.0], [3.4, 57.0], [3.5, 58.0], [3.6, 58.0], [3.7, 59.0], [3.8, 60.0], [3.9, 60.0], [4.0, 60.0], [4.1, 61.0], [4.2, 62.0], [4.3, 62.0], [4.4, 63.0], [4.5, 64.0], [4.6, 65.0], [4.7, 66.0], [4.8, 67.0], [4.9, 67.0], [5.0, 68.0], [5.1, 70.0], [5.2, 73.0], [5.3, 75.0], [5.4, 76.0], [5.5, 77.0], [5.6, 77.0], [5.7, 78.0], [5.8, 78.0], [5.9, 78.0], [6.0, 79.0], [6.1, 79.0], [6.2, 80.0], [6.3, 81.0], [6.4, 81.0], [6.5, 82.0], [6.6, 82.0], [6.7, 83.0], [6.8, 83.0], [6.9, 84.0], [7.0, 84.0], [7.1, 84.0], [7.2, 84.0], [7.3, 84.0], [7.4, 84.0], [7.5, 84.0], [7.6, 84.0], [7.7, 84.0], [7.8, 84.0], [7.9, 84.0], [8.0, 84.0], [8.1, 84.0], [8.2, 85.0], [8.3, 85.0], [8.4, 85.0], [8.5, 85.0], [8.6, 85.0], [8.7, 85.0], [8.8, 85.0], [8.9, 85.0], [9.0, 85.0], [9.1, 85.0], [9.2, 85.0], [9.3, 85.0], [9.4, 85.0], [9.5, 85.0], [9.6, 85.0], [9.7, 85.0], [9.8, 85.0], [9.9, 85.0], [10.0, 85.0], [10.1, 85.0], [10.2, 85.0], [10.3, 85.0], [10.4, 85.0], [10.5, 85.0], [10.6, 85.0], [10.7, 85.0], [10.8, 85.0], [10.9, 85.0], [11.0, 85.0], [11.1, 85.0], [11.2, 85.0], [11.3, 85.0], [11.4, 85.0], [11.5, 85.0], [11.6, 85.0], [11.7, 85.0], [11.8, 85.0], [11.9, 85.0], [12.0, 85.0], [12.1, 85.0], [12.2, 85.0], [12.3, 86.0], [12.4, 86.0], [12.5, 86.0], [12.6, 86.0], [12.7, 86.0], [12.8, 86.0], [12.9, 86.0], [13.0, 86.0], [13.1, 86.0], [13.2, 86.0], [13.3, 86.0], [13.4, 86.0], [13.5, 86.0], [13.6, 86.0], [13.7, 86.0], [13.8, 86.0], [13.9, 86.0], [14.0, 86.0], [14.1, 86.0], [14.2, 86.0], [14.3, 86.0], [14.4, 86.0], [14.5, 86.0], [14.6, 86.0], [14.7, 86.0], [14.8, 86.0], [14.9, 86.0], [15.0, 86.0], [15.1, 86.0], [15.2, 86.0], [15.3, 86.0], [15.4, 86.0], [15.5, 86.0], [15.6, 86.0], [15.7, 86.0], [15.8, 86.0], [15.9, 86.0], [16.0, 86.0], [16.1, 86.0], [16.2, 86.0], [16.3, 86.0], [16.4, 86.0], [16.5, 86.0], [16.6, 86.0], [16.7, 86.0], [16.8, 86.0], [16.9, 86.0], [17.0, 86.0], [17.1, 86.0], [17.2, 86.0], [17.3, 86.0], [17.4, 86.0], [17.5, 86.0], [17.6, 86.0], [17.7, 86.0], [17.8, 86.0], [17.9, 86.0], [18.0, 86.0], [18.1, 86.0], [18.2, 86.0], [18.3, 86.0], [18.4, 86.0], [18.5, 86.0], [18.6, 86.0], [18.7, 86.0], [18.8, 86.0], [18.9, 86.0], [19.0, 86.0], [19.1, 86.0], [19.2, 86.0], [19.3, 86.0], [19.4, 86.0], [19.5, 86.0], [19.6, 86.0], [19.7, 86.0], [19.8, 86.0], [19.9, 87.0], [20.0, 87.0], [20.1, 87.0], [20.2, 87.0], [20.3, 87.0], [20.4, 87.0], [20.5, 87.0], [20.6, 87.0], [20.7, 87.0], [20.8, 87.0], [20.9, 87.0], [21.0, 87.0], [21.1, 87.0], [21.2, 87.0], [21.3, 87.0], [21.4, 87.0], [21.5, 87.0], [21.6, 87.0], [21.7, 87.0], [21.8, 87.0], [21.9, 87.0], [22.0, 87.0], [22.1, 87.0], [22.2, 87.0], [22.3, 87.0], [22.4, 87.0], [22.5, 87.0], [22.6, 87.0], [22.7, 87.0], [22.8, 87.0], [22.9, 87.0], [23.0, 87.0], [23.1, 87.0], [23.2, 87.0], [23.3, 87.0], [23.4, 87.0], [23.5, 87.0], [23.6, 87.0], [23.7, 87.0], [23.8, 87.0], [23.9, 87.0], [24.0, 87.0], [24.1, 87.0], [24.2, 87.0], [24.3, 87.0], [24.4, 87.0], [24.5, 87.0], [24.6, 87.0], [24.7, 87.0], [24.8, 87.0], [24.9, 87.0], [25.0, 87.0], [25.1, 87.0], [25.2, 87.0], [25.3, 87.0], [25.4, 87.0], [25.5, 87.0], [25.6, 87.0], [25.7, 87.0], [25.8, 87.0], [25.9, 87.0], [26.0, 87.0], [26.1, 87.0], [26.2, 87.0], [26.3, 87.0], [26.4, 87.0], [26.5, 87.0], [26.6, 87.0], [26.7, 87.0], [26.8, 87.0], [26.9, 87.0], [27.0, 87.0], [27.1, 87.0], [27.2, 87.0], [27.3, 87.0], [27.4, 87.0], [27.5, 87.0], [27.6, 87.0], [27.7, 87.0], [27.8, 87.0], [27.9, 87.0], [28.0, 87.0], [28.1, 87.0], [28.2, 87.0], [28.3, 87.0], [28.4, 87.0], [28.5, 87.0], [28.6, 87.0], [28.7, 87.0], [28.8, 87.0], [28.9, 87.0], [29.0, 87.0], [29.1, 87.0], [29.2, 87.0], [29.3, 87.0], [29.4, 87.0], [29.5, 87.0], [29.6, 87.0], [29.7, 87.0], [29.8, 87.0], [29.9, 87.0], [30.0, 87.0], [30.1, 87.0], [30.2, 87.0], [30.3, 87.0], [30.4, 87.0], [30.5, 87.0], [30.6, 87.0], [30.7, 87.0], [30.8, 87.0], [30.9, 88.0], [31.0, 88.0], [31.1, 88.0], [31.2, 88.0], [31.3, 88.0], [31.4, 88.0], [31.5, 88.0], [31.6, 88.0], [31.7, 88.0], [31.8, 88.0], [31.9, 88.0], [32.0, 88.0], [32.1, 88.0], [32.2, 88.0], [32.3, 88.0], [32.4, 88.0], [32.5, 88.0], [32.6, 88.0], [32.7, 88.0], [32.8, 88.0], [32.9, 88.0], [33.0, 88.0], [33.1, 88.0], [33.2, 88.0], [33.3, 88.0], [33.4, 88.0], [33.5, 88.0], [33.6, 88.0], [33.7, 88.0], [33.8, 88.0], [33.9, 88.0], [34.0, 88.0], [34.1, 88.0], [34.2, 88.0], [34.3, 88.0], [34.4, 88.0], [34.5, 88.0], [34.6, 88.0], [34.7, 88.0], [34.8, 88.0], [34.9, 88.0], [35.0, 88.0], [35.1, 88.0], [35.2, 88.0], [35.3, 88.0], [35.4, 88.0], [35.5, 88.0], [35.6, 88.0], [35.7, 88.0], [35.8, 88.0], [35.9, 88.0], [36.0, 88.0], [36.1, 88.0], [36.2, 88.0], [36.3, 88.0], [36.4, 88.0], [36.5, 88.0], [36.6, 88.0], [36.7, 88.0], [36.8, 88.0], [36.9, 88.0], [37.0, 88.0], [37.1, 88.0], [37.2, 88.0], [37.3, 88.0], [37.4, 88.0], [37.5, 88.0], [37.6, 88.0], [37.7, 88.0], [37.8, 88.0], [37.9, 88.0], [38.0, 88.0], [38.1, 88.0], [38.2, 88.0], [38.3, 88.0], [38.4, 88.0], [38.5, 88.0], [38.6, 88.0], [38.7, 88.0], [38.8, 88.0], [38.9, 88.0], [39.0, 88.0], [39.1, 88.0], [39.2, 88.0], [39.3, 88.0], [39.4, 88.0], [39.5, 88.0], [39.6, 88.0], [39.7, 88.0], [39.8, 88.0], [39.9, 88.0], [40.0, 88.0], [40.1, 88.0], [40.2, 88.0], [40.3, 88.0], [40.4, 88.0], [40.5, 88.0], [40.6, 88.0], [40.7, 88.0], [40.8, 88.0], [40.9, 88.0], [41.0, 88.0], [41.1, 88.0], [41.2, 88.0], [41.3, 88.0], [41.4, 88.0], [41.5, 88.0], [41.6, 88.0], [41.7, 88.0], [41.8, 88.0], [41.9, 88.0], [42.0, 88.0], [42.1, 88.0], [42.2, 88.0], [42.3, 89.0], [42.4, 89.0], [42.5, 89.0], [42.6, 89.0], [42.7, 89.0], [42.8, 89.0], [42.9, 89.0], [43.0, 89.0], [43.1, 89.0], [43.2, 89.0], [43.3, 89.0], [43.4, 89.0], [43.5, 89.0], [43.6, 89.0], [43.7, 89.0], [43.8, 89.0], [43.9, 89.0], [44.0, 89.0], [44.1, 89.0], [44.2, 89.0], [44.3, 89.0], [44.4, 89.0], [44.5, 89.0], [44.6, 89.0], [44.7, 89.0], [44.8, 89.0], [44.9, 89.0], [45.0, 89.0], [45.1, 89.0], [45.2, 89.0], [45.3, 89.0], [45.4, 89.0], [45.5, 89.0], [45.6, 89.0], [45.7, 89.0], [45.8, 89.0], [45.9, 89.0], [46.0, 89.0], [46.1, 89.0], [46.2, 89.0], [46.3, 89.0], [46.4, 89.0], [46.5, 89.0], [46.6, 89.0], [46.7, 89.0], [46.8, 89.0], [46.9, 89.0], [47.0, 89.0], [47.1, 89.0], [47.2, 89.0], [47.3, 89.0], [47.4, 89.0], [47.5, 89.0], [47.6, 89.0], [47.7, 89.0], [47.8, 89.0], [47.9, 89.0], [48.0, 89.0], [48.1, 89.0], [48.2, 89.0], [48.3, 89.0], [48.4, 89.0], [48.5, 89.0], [48.6, 89.0], [48.7, 89.0], [48.8, 89.0], [48.9, 89.0], [49.0, 89.0], [49.1, 89.0], [49.2, 89.0], [49.3, 89.0], [49.4, 89.0], [49.5, 89.0], [49.6, 89.0], [49.7, 89.0], [49.8, 89.0], [49.9, 89.0], [50.0, 89.0], [50.1, 89.0], [50.2, 89.0], [50.3, 89.0], [50.4, 89.0], [50.5, 89.0], [50.6, 89.0], [50.7, 89.0], [50.8, 89.0], [50.9, 89.0], [51.0, 89.0], [51.1, 89.0], [51.2, 89.0], [51.3, 89.0], [51.4, 89.0], [51.5, 89.0], [51.6, 89.0], [51.7, 89.0], [51.8, 89.0], [51.9, 89.0], [52.0, 89.0], [52.1, 89.0], [52.2, 89.0], [52.3, 89.0], [52.4, 89.0], [52.5, 90.0], [52.6, 90.0], [52.7, 90.0], [52.8, 90.0], [52.9, 90.0], [53.0, 90.0], [53.1, 90.0], [53.2, 90.0], [53.3, 90.0], [53.4, 90.0], [53.5, 90.0], [53.6, 90.0], [53.7, 90.0], [53.8, 90.0], [53.9, 90.0], [54.0, 90.0], [54.1, 90.0], [54.2, 90.0], [54.3, 90.0], [54.4, 90.0], [54.5, 90.0], [54.6, 90.0], [54.7, 90.0], [54.8, 90.0], [54.9, 90.0], [55.0, 90.0], [55.1, 90.0], [55.2, 90.0], [55.3, 90.0], [55.4, 90.0], [55.5, 90.0], [55.6, 90.0], [55.7, 90.0], [55.8, 90.0], [55.9, 90.0], [56.0, 90.0], [56.1, 90.0], [56.2, 90.0], [56.3, 90.0], [56.4, 90.0], [56.5, 90.0], [56.6, 90.0], [56.7, 90.0], [56.8, 90.0], [56.9, 90.0], [57.0, 90.0], [57.1, 90.0], [57.2, 90.0], [57.3, 90.0], [57.4, 90.0], [57.5, 90.0], [57.6, 90.0], [57.7, 90.0], [57.8, 90.0], [57.9, 90.0], [58.0, 90.0], [58.1, 90.0], [58.2, 90.0], [58.3, 90.0], [58.4, 90.0], [58.5, 90.0], [58.6, 90.0], [58.7, 90.0], [58.8, 90.0], [58.9, 90.0], [59.0, 90.0], [59.1, 90.0], [59.2, 90.0], [59.3, 90.0], [59.4, 90.0], [59.5, 90.0], [59.6, 90.0], [59.7, 90.0], [59.8, 90.0], [59.9, 90.0], [60.0, 90.0], [60.1, 90.0], [60.2, 90.0], [60.3, 90.0], [60.4, 90.0], [60.5, 90.0], [60.6, 90.0], [60.7, 90.0], [60.8, 90.0], [60.9, 90.0], [61.0, 90.0], [61.1, 90.0], [61.2, 90.0], [61.3, 90.0], [61.4, 90.0], [61.5, 90.0], [61.6, 91.0], [61.7, 91.0], [61.8, 91.0], [61.9, 91.0], [62.0, 91.0], [62.1, 91.0], [62.2, 91.0], [62.3, 91.0], [62.4, 91.0], [62.5, 91.0], [62.6, 91.0], [62.7, 91.0], [62.8, 91.0], [62.9, 91.0], [63.0, 91.0], [63.1, 91.0], [63.2, 91.0], [63.3, 91.0], [63.4, 91.0], [63.5, 91.0], [63.6, 91.0], [63.7, 91.0], [63.8, 91.0], [63.9, 91.0], [64.0, 91.0], [64.1, 91.0], [64.2, 91.0], [64.3, 91.0], [64.4, 91.0], [64.5, 91.0], [64.6, 91.0], [64.7, 91.0], [64.8, 91.0], [64.9, 91.0], [65.0, 91.0], [65.1, 91.0], [65.2, 91.0], [65.3, 91.0], [65.4, 91.0], [65.5, 91.0], [65.6, 91.0], [65.7, 91.0], [65.8, 91.0], [65.9, 91.0], [66.0, 91.0], [66.1, 91.0], [66.2, 91.0], [66.3, 91.0], [66.4, 91.0], [66.5, 91.0], [66.6, 91.0], [66.7, 91.0], [66.8, 91.0], [66.9, 91.0], [67.0, 91.0], [67.1, 91.0], [67.2, 91.0], [67.3, 91.0], [67.4, 91.0], [67.5, 91.0], [67.6, 91.0], [67.7, 91.0], [67.8, 91.0], [67.9, 91.0], [68.0, 91.0], [68.1, 91.0], [68.2, 91.0], [68.3, 91.0], [68.4, 91.0], [68.5, 91.0], [68.6, 91.0], [68.7, 92.0], [68.8, 92.0], [68.9, 92.0], [69.0, 92.0], [69.1, 92.0], [69.2, 92.0], [69.3, 92.0], [69.4, 92.0], [69.5, 92.0], [69.6, 92.0], [69.7, 92.0], [69.8, 92.0], [69.9, 92.0], [70.0, 92.0], [70.1, 92.0], [70.2, 92.0], [70.3, 92.0], [70.4, 92.0], [70.5, 92.0], [70.6, 92.0], [70.7, 92.0], [70.8, 92.0], [70.9, 92.0], [71.0, 92.0], [71.1, 92.0], [71.2, 92.0], [71.3, 92.0], [71.4, 92.0], [71.5, 92.0], [71.6, 92.0], [71.7, 92.0], [71.8, 92.0], [71.9, 92.0], [72.0, 92.0], [72.1, 92.0], [72.2, 92.0], [72.3, 92.0], [72.4, 92.0], [72.5, 92.0], [72.6, 92.0], [72.7, 92.0], [72.8, 92.0], [72.9, 92.0], [73.0, 92.0], [73.1, 92.0], [73.2, 92.0], [73.3, 92.0], [73.4, 92.0], [73.5, 92.0], [73.6, 92.0], [73.7, 92.0], [73.8, 92.0], [73.9, 92.0], [74.0, 92.0], [74.1, 92.0], [74.2, 93.0], [74.3, 93.0], [74.4, 93.0], [74.5, 93.0], [74.6, 93.0], [74.7, 93.0], [74.8, 93.0], [74.9, 93.0], [75.0, 93.0], [75.1, 93.0], [75.2, 93.0], [75.3, 93.0], [75.4, 93.0], [75.5, 93.0], [75.6, 93.0], [75.7, 93.0], [75.8, 93.0], [75.9, 93.0], [76.0, 93.0], [76.1, 93.0], [76.2, 93.0], [76.3, 93.0], [76.4, 93.0], [76.5, 93.0], [76.6, 93.0], [76.7, 93.0], [76.8, 93.0], [76.9, 93.0], [77.0, 93.0], [77.1, 93.0], [77.2, 93.0], [77.3, 93.0], [77.4, 93.0], [77.5, 93.0], [77.6, 93.0], [77.7, 93.0], [77.8, 93.0], [77.9, 93.0], [78.0, 93.0], [78.1, 93.0], [78.2, 93.0], [78.3, 93.0], [78.4, 93.0], [78.5, 93.0], [78.6, 93.0], [78.7, 93.0], [78.8, 93.0], [78.9, 93.0], [79.0, 94.0], [79.1, 94.0], [79.2, 94.0], [79.3, 94.0], [79.4, 94.0], [79.5, 94.0], [79.6, 94.0], [79.7, 94.0], [79.8, 94.0], [79.9, 94.0], [80.0, 94.0], [80.1, 94.0], [80.2, 94.0], [80.3, 94.0], [80.4, 94.0], [80.5, 94.0], [80.6, 94.0], [80.7, 94.0], [80.8, 94.0], [80.9, 94.0], [81.0, 94.0], [81.1, 94.0], [81.2, 94.0], [81.3, 94.0], [81.4, 94.0], [81.5, 94.0], [81.6, 94.0], [81.7, 94.0], [81.8, 94.0], [81.9, 94.0], [82.0, 94.0], [82.1, 94.0], [82.2, 95.0], [82.3, 95.0], [82.4, 95.0], [82.5, 95.0], [82.6, 95.0], [82.7, 95.0], [82.8, 95.0], [82.9, 95.0], [83.0, 95.0], [83.1, 95.0], [83.2, 95.0], [83.3, 95.0], [83.4, 95.0], [83.5, 95.0], [83.6, 95.0], [83.7, 95.0], [83.8, 95.0], [83.9, 95.0], [84.0, 95.0], [84.1, 95.0], [84.2, 96.0], [84.3, 96.0], [84.4, 96.0], [84.5, 96.0], [84.6, 96.0], [84.7, 96.0], [84.8, 96.0], [84.9, 96.0], [85.0, 96.0], [85.1, 96.0], [85.2, 96.0], [85.3, 96.0], [85.4, 96.0], [85.5, 96.0], [85.6, 96.0], [85.7, 96.0], [85.8, 96.0], [85.9, 96.0], [86.0, 97.0], [86.1, 97.0], [86.2, 97.0], [86.3, 97.0], [86.4, 97.0], [86.5, 97.0], [86.6, 97.0], [86.7, 97.0], [86.8, 97.0], [86.9, 97.0], [87.0, 97.0], [87.1, 97.0], [87.2, 97.0], [87.3, 97.0], [87.4, 98.0], [87.5, 98.0], [87.6, 98.0], [87.7, 98.0], [87.8, 98.0], [87.9, 98.0], [88.0, 98.0], [88.1, 98.0], [88.2, 98.0], [88.3, 98.0], [88.4, 98.0], [88.5, 99.0], [88.6, 99.0], [88.7, 99.0], [88.8, 99.0], [88.9, 99.0], [89.0, 99.0], [89.1, 99.0], [89.2, 99.0], [89.3, 99.0], [89.4, 99.0], [89.5, 99.0], [89.6, 99.0], [89.7, 99.0], [89.8, 99.0], [89.9, 100.0], [90.0, 100.0], [90.1, 100.0], [90.2, 100.0], [90.3, 100.0], [90.4, 100.0], [90.5, 100.0], [90.6, 100.0], [90.7, 100.0], [90.8, 100.0], [90.9, 100.0], [91.0, 101.0], [91.1, 101.0], [91.2, 101.0], [91.3, 101.0], [91.4, 101.0], [91.5, 101.0], [91.6, 101.0], [91.7, 101.0], [91.8, 102.0], [91.9, 102.0], [92.0, 102.0], [92.1, 102.0], [92.2, 102.0], [92.3, 102.0], [92.4, 102.0], [92.5, 103.0], [92.6, 103.0], [92.7, 103.0], [92.8, 103.0], [92.9, 103.0], [93.0, 103.0], [93.1, 104.0], [93.2, 104.0], [93.3, 104.0], [93.4, 104.0], [93.5, 104.0], [93.6, 104.0], [93.7, 105.0], [93.8, 105.0], [93.9, 105.0], [94.0, 105.0], [94.1, 105.0], [94.2, 105.0], [94.3, 106.0], [94.4, 106.0], [94.5, 106.0], [94.6, 106.0], [94.7, 106.0], [94.8, 107.0], [94.9, 107.0], [95.0, 107.0], [95.1, 107.0], [95.2, 108.0], [95.3, 108.0], [95.4, 108.0], [95.5, 108.0], [95.6, 109.0], [95.7, 109.0], [95.8, 109.0], [95.9, 109.0], [96.0, 109.0], [96.1, 110.0], [96.2, 110.0], [96.3, 110.0], [96.4, 111.0], [96.5, 111.0], [96.6, 111.0], [96.7, 111.0], [96.8, 112.0], [96.9, 112.0], [97.0, 112.0], [97.1, 113.0], [97.2, 113.0], [97.3, 114.0], [97.4, 114.0], [97.5, 114.0], [97.6, 115.0], [97.7, 115.0], [97.8, 115.0], [97.9, 116.0], [98.0, 116.0], [98.1, 116.0], [98.2, 117.0], [98.3, 117.0], [98.4, 118.0], [98.5, 119.0], [98.6, 120.0], [98.7, 120.0], [98.8, 121.0], [98.9, 122.0], [99.0, 122.0], [99.1, 123.0], [99.2, 124.0], [99.3, 126.0], [99.4, 129.0], [99.5, 131.0], [99.6, 133.0], [99.7, 134.0], [99.8, 137.0], [99.9, 440.0], [100.0, 2541.0]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 89826.0, "series": [{"data": [[0.0, 89826.0], [600.0, 6.0], [700.0, 7.0], [800.0, 6.0], [900.0, 5.0], [1000.0, 5.0], [1100.0, 4.0], [1200.0, 3.0], [1300.0, 5.0], [1400.0, 4.0], [1500.0, 5.0], [100.0, 10054.0], [1600.0, 5.0], [1700.0, 5.0], [1800.0, 4.0], [1900.0, 5.0], [2000.0, 4.0], [2100.0, 3.0], [2200.0, 4.0], [2300.0, 3.0], [2400.0, 3.0], [2500.0, 2.0], [200.0, 7.0], [300.0, 10.0], [400.0, 7.0], [500.0, 8.0]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 43.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 99904.0, "series": [{"data": [[0.0, 99904.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 53.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 43.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 195.89350999999746, "minX": 1.7726253E12, "maxY": 195.89350999999746, "series": [{"data": [[1.7726253E12, 195.89350999999746]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7726253E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 137.66666666666669, "series": [{"data": [[3.0, 2.6666666666666665], [4.0, 1.0], [7.0, 4.142857142857143], [8.0, 4.5], [9.0, 4.6], [10.0, 5.6], [11.0, 6.0], [12.0, 6.0], [13.0, 6.333333333333333], [14.0, 7.0], [15.0, 7.4], [16.0, 8.000000000000002], [17.0, 9.375], [18.0, 10.428571428571429], [20.0, 10.916666666666668], [21.0, 11.5], [22.0, 12.0], [23.0, 12.142857142857142], [24.0, 12.0], [25.0, 12.0625], [26.0, 12.769230769230768], [27.0, 12.857142857142858], [28.0, 13.0], [29.0, 15.222222222222221], [30.0, 15.666666666666666], [31.0, 16.625000000000007], [33.0, 16.58823529411765], [35.0, 15.909090909090908], [34.0, 16.181818181818183], [37.0, 18.25], [36.0, 16.888888888888886], [39.0, 20.0], [38.0, 19.5], [41.0, 19.2], [40.0, 19.875], [43.0, 19.0], [42.0, 19.0], [45.0, 20.470588235294116], [44.0, 19.03846153846154], [47.0, 25.782608695652172], [46.0, 23.04166666666666], [49.0, 23.222222222222225], [48.0, 24.941176470588236], [51.0, 24.2], [50.0, 23.666666666666664], [53.0, 24.47826086956522], [52.0, 24.2], [55.0, 23.666666666666668], [54.0, 23.91304347826087], [57.0, 25.88888888888889], [56.0, 24.2972972972973], [59.0, 29.666666666666668], [58.0, 27.299999999999994], [61.0, 29.434782608695652], [60.0, 29.0], [63.0, 31.127659574468076], [62.0, 30.117647058823525], [65.0, 68.38888888888893], [66.0, 43.73333333333333], [67.0, 34.41176470588236], [64.0, 31.0], [68.0, 43.40000000000001], [69.0, 31.97222222222223], [70.0, 27.5], [71.0, 38.01818181818183], [73.0, 35.66666666666667], [74.0, 37.99999999999999], [75.0, 38.720000000000006], [72.0, 40.94594594594596], [76.0, 36.983870967741936], [77.0, 42.5], [78.0, 35.789473684210535], [79.0, 34.48214285714286], [80.0, 37.72], [81.0, 38.33333333333334], [82.0, 42.761904761904766], [83.0, 37.98717948717949], [84.0, 39.76190476190475], [85.0, 42.535714285714285], [86.0, 42.0], [87.0, 40.41666666666668], [88.0, 40.64705882352942], [89.0, 40.31666666666668], [90.0, 44.43750000000001], [91.0, 40.90909090909091], [92.0, 40.57999999999999], [93.0, 43.16949152542372], [94.0, 44.428571428571445], [95.0, 44.8125], [96.0, 45.8], [97.0, 43.63888888888888], [98.0, 44.05128205128205], [99.0, 57.57142857142858], [100.0, 46.750000000000014], [101.0, 49.324324324324316], [102.0, 47.84], [103.0, 47.0], [104.0, 46.96511627906977], [105.0, 55.125], [106.0, 49.22222222222222], [107.0, 48.27358490566038], [108.0, 57.75], [109.0, 48.235294117647065], [110.0, 49.499999999999986], [111.0, 52.67692307692309], [112.0, 51.875], [113.0, 51.95454545454545], [114.0, 51.50000000000001], [115.0, 55.035714285714285], [116.0, 53.19999999999999], [118.0, 55.35555555555556], [119.0, 59.21212121212122], [117.0, 55.3125], [120.0, 53.99999999999999], [121.0, 53.828571428571436], [122.0, 53.18556701030929], [123.0, 60.666666666666664], [124.0, 55.731343283582085], [125.0, 56.789473684210535], [126.0, 58.62857142857144], [127.0, 65.99999999999999], [128.0, 52.18181818181818], [129.0, 56.84615384615385], [130.0, 55.64285714285714], [131.0, 69.53846153846155], [132.0, 57.56687898089171], [133.0, 64.22727272727273], [134.0, 62.70588235294117], [135.0, 63.24999999999999], [136.0, 70.43750000000001], [137.0, 69.58333333333333], [138.0, 61.0], [139.0, 71.0], [140.0, 78.25], [141.0, 86.80000000000001], [142.0, 57.54545454545455], [143.0, 88.42857142857143], [144.0, 65.63157894736842], [146.0, 64.5], [148.0, 84.69999999999999], [149.0, 66.8], [150.0, 63.83333333333333], [151.0, 95.88235294117646], [147.0, 86.8], [145.0, 86.57142857142857], [152.0, 77.1304347826087], [154.0, 80.19999999999999], [156.0, 64.8235294117647], [157.0, 65.8888888888889], [158.0, 65.55555555555556], [159.0, 84.29411764705881], [155.0, 88.25], [153.0, 88.25], [160.0, 98.66666666666667], [161.0, 67.88235294117646], [162.0, 84.33333333333334], [163.0, 65.0], [164.0, 104.16666666666667], [165.0, 77.2], [166.0, 79.57142857142857], [167.0, 85.35], [168.0, 86.2], [169.0, 75.38461538461539], [170.0, 127.42857142857143], [171.0, 66.93333333333331], [172.0, 62.916666666666664], [173.0, 91.0], [174.0, 62.0], [175.0, 85.88888888888889], [176.0, 79.875], [177.0, 107.11111111111111], [178.0, 73.0], [179.0, 69.42857142857143], [180.0, 85.5625], [181.0, 56.0], [182.0, 64.88888888888889], [183.0, 62.77777777777777], [184.0, 82.0], [185.0, 63.25], [186.0, 64.0], [187.0, 72.00000000000001], [188.0, 137.66666666666669], [189.0, 76.5], [190.0, 77.25], [191.0, 70.0], [192.0, 67.0], [193.0, 119.0], [194.0, 82.86486486486487], [195.0, 69.42857142857143], [196.0, 73.15384615384615], [197.0, 79.5], [198.0, 64.0], [199.0, 90.24218749999997], [200.0, 92.49538213729168], [1.0, 2.0]], "isOverall": false, "label": "GET /", "isController": false}, {"data": [[195.89348999999828, 90.64305000000029]], "isOverall": false, "label": "GET /-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 183333.33333333334, "minX": 1.7726253E12, "maxY": 318333.3333333333, "series": [{"data": [[1.7726253E12, 318333.3333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7726253E12, 183333.33333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7726253E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 90.64305000000029, "minX": 1.7726253E12, "maxY": 90.64305000000029, "series": [{"data": [[1.7726253E12, 90.64305000000029]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7726253E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 90.6304300000001, "minX": 1.7726253E12, "maxY": 90.6304300000001, "series": [{"data": [[1.7726253E12, 90.6304300000001]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7726253E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.02575999999999974, "minX": 1.7726253E12, "maxY": 0.02575999999999974, "series": [{"data": [[1.7726253E12, 0.02575999999999974]], "isOverall": false, "label": "GET /", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7726253E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.7726253E12, "maxY": 2541.0, "series": [{"data": [[1.7726253E12, 2541.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7726253E12, 94.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7726253E12, 115.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7726253E12, 99.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7726253E12, 1.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7726253E12, 88.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7726253E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 13.0, "minX": 260.0, "maxY": 114.0, "series": [{"data": [[1710.0, 114.0], [1751.0, 60.0], [1821.0, 82.0], [1865.0, 103.0], [1926.0, 101.0], [1997.0, 89.0], [2153.0, 89.0], [2175.0, 91.0], [2062.0, 91.0], [2158.0, 91.0], [2050.0, 93.0], [2170.0, 89.0], [2137.0, 93.0], [2108.0, 93.0], [2152.0, 93.0], [2184.0, 92.0], [2197.0, 91.0], [2200.0, 89.0], [2223.0, 88.0], [2228.0, 89.0], [2230.0, 89.0], [2236.0, 88.0], [2238.0, 41.0], [2233.0, 89.0], [2221.0, 90.0], [2192.0, 90.0], [2191.0, 92.0], [2202.0, 90.0], [2218.0, 88.0], [2217.0, 88.0], [2220.0, 89.5], [2241.0, 88.0], [2256.0, 88.0], [2289.0, 88.0], [2280.0, 87.0], [2263.0, 88.0], [2268.0, 89.0], [2267.0, 87.0], [2309.0, 88.0], [260.0, 13.0], [397.0, 46.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2309.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 13.0, "minX": 260.0, "maxY": 114.0, "series": [{"data": [[1710.0, 114.0], [1751.0, 60.0], [1821.0, 82.0], [1865.0, 103.0], [1926.0, 101.0], [1997.0, 89.0], [2153.0, 89.0], [2175.0, 91.0], [2062.0, 91.0], [2158.0, 91.0], [2050.0, 93.0], [2170.0, 89.0], [2137.0, 93.0], [2108.0, 93.0], [2152.0, 93.0], [2184.0, 92.0], [2197.0, 91.0], [2200.0, 89.0], [2223.0, 88.0], [2228.0, 89.0], [2230.0, 89.0], [2236.0, 88.0], [2238.0, 41.0], [2233.0, 89.0], [2221.0, 90.0], [2192.0, 90.0], [2191.0, 92.0], [2202.0, 90.0], [2218.0, 88.0], [2217.0, 88.0], [2220.0, 89.0], [2241.0, 88.0], [2256.0, 88.0], [2289.0, 88.0], [2280.0, 87.0], [2263.0, 88.0], [2268.0, 89.0], [2267.0, 87.0], [2309.0, 88.0], [260.0, 13.0], [397.0, 46.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2309.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1666.6666666666667, "minX": 1.7726253E12, "maxY": 1666.6666666666667, "series": [{"data": [[1.7726253E12, 1666.6666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7726253E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1666.6666666666667, "minX": 1.7726253E12, "maxY": 1666.6666666666667, "series": [{"data": [[1.7726253E12, 1666.6666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7726253E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1666.6666666666667, "minX": 1.7726253E12, "maxY": 1666.6666666666667, "series": [{"data": [[1.7726253E12, 1666.6666666666667]], "isOverall": false, "label": "GET /-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7726253E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1666.6666666666667, "minX": 1.7726253E12, "maxY": 1666.6666666666667, "series": [{"data": [[1.7726253E12, 1666.6666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7726253E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

