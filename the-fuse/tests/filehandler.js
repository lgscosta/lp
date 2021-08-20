import { readFile } from 'fs';

export default function(filename, successFn, errorFn) {
  readFile(filename, function(err, data) {
      if(err) {
           errorFn(err);
      } else {
           successFn(data);
      }
 });
};