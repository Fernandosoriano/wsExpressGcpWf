/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const projectId = 'resonant-tube-317600';

const location = 'us-central1';
const { WorkflowsClient } = require('@google-cloud/workflows');
const client = new WorkflowsClient();
async function listWorkflows() {
    const [workflows] = await client.listWorkflows({
        parent: client.locationPath(projectId, location),
    });
    for (const workflow of workflows) {
        console.log(`name: ${workflow.name}`);
    }
}
listWorkflows();