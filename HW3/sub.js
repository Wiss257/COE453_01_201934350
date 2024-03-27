const functions = require('@google-cloud/functions-framework');

functions.http('sub', (req, res) => {
  if (req.method === 'POST') {
    const { X, Y } = req.body;

    const result = parseFloat(X) - parseFloat(Y);

    const response = {
      X: X,
      Y: Y,
      result: result
    };

    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(response));
  } else {
    res.status(405).send('Method Not Allowed');
  }
});
